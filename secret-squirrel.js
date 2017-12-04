module.exports = {
	files: {
		allow: [
			'.flowconfig',
			'index.js.flow',
			'package-lock.json'
		],
		allowOverrides: []
	},
	strings: {
		deny: [],
		denyOverrides: [
			'146da558-4dee-11e3-8fa5-00144feabdc0' // update-fixture.js:5
		]
	}
};
