const {get} = require('@financial-times/n-es-client');
const fs = require('mz/fs');

async function updateFixture() {
	const item = await get('146da558-4dee-11e3-8fa5-00144feabdc0');
	const content = `// @flow

	import type {FtItem} from '../';

	const item: FtItem = ${JSON.stringify(item)}`;

	await fs.writeFile('fixtures/test.js', content, 'utf-8');
}

updateFixture().catch(err => {
	console.error(err.stack);
	process.exit(1);
});
