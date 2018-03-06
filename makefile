node_modules/@financial-times/n-gage/index.mk:
	npm install --no-save --no-package-lock @financial-times/n-gage
	touch $@

-include node_modules/@financial-times/n-gage/index.mk

fixtures/test.js: latest.version
	node update-fixture.js

index.js.flow: latest.version
	node build.js $$(< $<)

latest.version: ALWAYS_OUTDATED
	node latest-version.js

test: index.js.flow fixtures/test.js
	flow check

ALWAYS_OUTDATED:
