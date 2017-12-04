const mappingToSchema = require('es-mapping-to-schema');
const {parseSchema} = require('json-schema-to-flow-type');
const {mapping} = require('@financial-times/n-es-client');
const fs = require('mz/fs');

async function generateTypes(version) {
	if(!version) throw new Error('Must provide a mappings version');

	const itemMappings = (await mapping())[version].mappings.item;

	const schema = mappingToSchema(itemMappings, {
		arrayPaths: ['annotations', 'curatedRelatedContent', 'leadImages', 'containedIn', 'authorConcepts', '_editorialComponents', '_editorialComponents.stories']
	}).validation;

	schema.id = 'FtItem'; // identifier for export
	return parseSchema(schema);
}

async function run(version) {
	try {
		const types = await generateTypes(version);
		await fs.writeFile('index.js.flow', types, 'utf-8');
	} catch(err) {
		console.error(err.stack);
		process.exit(1);
	}
}

run(process.argv[2]);
