const {get} = require('@financial-times/n-es-client');
const fs = require('mz/fs');

async function updateFixture() {
	const item = await get('146da558-4dee-11e3-8fa5-00144feabdc0');

	// trim long string fields to a reasonable length so the build output is readable
	['bodyHTML', 'openingHTML', 'bodyText'].forEach(
		prop => item[prop] = item[prop].slice(0, 100)
	);

	const content = `// @flow

	import type {FtItem} from '../';

	const item: FtItem = ${JSON.stringify(item, null, 2)}`;

	await fs.writeFile('fixtures/test.js', content, 'utf-8');
}

updateFixture().catch(err => {
	console.error(err.stack);
	process.exit(1);
});
