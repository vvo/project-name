# Contributing to project-name

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Requirements](#requirements)
- [Development](#development)
- [Example or web UI](#example-or-web-ui)
- [Releases](#releases)
- [Other scripts](#other-scripts)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Requirements

To run this project, you will need:

- Node.js >= v9.8.0, use nvm - [install instructions](https://github.com/creationix/nvm#install-script)
- Yarn >= v1.5.1 - [install instructions ("Alternatives" tab)](https://yarnpkg.com/en/docs/install#alternatives-tab)

Pro tip: Remove any brew installed/globall system installed Node.js and Yarn, just use nvm and Alternatives installation, they works perfectly.

Then:

```
yarn
```

## Development

Must launch tests in watch mode.

```sh
npm run dev
```

## Example or web UI

Must launch an example or the web UI in watch mode

```sh
npm start
```

## Releases

If you have the npm and GitHub write access, then you can release

```sh
npm run release
```

## Other scripts

```sh
> npm run
Lifecycle scripts included in :
  test
    npm run lint
  start


available via `npm run-script`:
  doctoc
    doctoc --maxlevel 2 README.md .github/CONTRIBUTING.md
  lint
    eslint .
  lint:fix
    npm run lint -- --fix
  release
    lerna publish --exact --conventional-commits
  dev
```
