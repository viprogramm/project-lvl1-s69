install:
	npm install

start:
	npm run babel-node -- src/bin/brain-calc.js

publish:
	npm publish

build:
	npm run build

clean:
	npm run clean

lint:
	npm run eslint -- src