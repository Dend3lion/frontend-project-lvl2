install:
	npm ci

run:
	bin/nodejs-package.js 10

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish --dry-run