const {mapping} = require('@financial-times/n-es-client');
const fs = require('mz/fs');

async function getLatestVersion() {
	const versions = Object.keys(await mapping());
	return versions.sort().reverse()[0]; // format is "content_2017-12-04", so can sort lexicographically
}

module.exports = getLatestVersion;

async function run(outputFilename) {
	const version = await getLatestVersion();
	await fs.writeFile('latest.version', version, 'utf-8');
}

if(module === require.main) {
	run(process.argv[2]).catch(err => {
		console.error(err.stack);
		process.exit(1);
	});
}
