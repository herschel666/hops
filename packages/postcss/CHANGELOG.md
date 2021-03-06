# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [14.0.0-nightly.6](https://github.com/xing/hops/compare/v14.0.0-nightly.5...v14.0.0-nightly.6) (2021-01-13)


### Bug Fixes

* **postcss:** disable external PostCSS configs ([0083506](https://github.com/xing/hops/commit/008350615e18733bbf0c95e6cf25d8756bb7e978))





# [14.0.0-nightly.5](https://github.com/xing/hops/compare/v14.0.0-nightly.4...v14.0.0-nightly.5) (2021-01-11)


### Bug Fixes

* **postcss:** update Webpack's CSS compilation ([c7e8b1e](https://github.com/xing/hops/commit/c7e8b1e236e1e1ed745917f6c83783efee161828))


### Features

* **postcss:** add option to enable named exports for CSS Modules ([426c051](https://github.com/xing/hops/commit/426c051f129a0c5ef0e5cc65d47bdaf6355e9084))
* **postcss:** export CSS Modules as ES Modules ([5f4ff80](https://github.com/xing/hops/commit/5f4ff80bf2897f737ba1bdcf3d9ea8322f35326e))


### BREAKING CHANGES

* **postcss:** CSS Modules switched to ESM and now export the styles
object as a `default`-export.





# [14.0.0-nightly.4](https://github.com/xing/hops/compare/v14.0.0-nightly.3...v14.0.0-nightly.4) (2020-12-07)

**Note:** Version bump only for package hops-postcss





# [14.0.0-nightly.3](https://github.com/xing/hops/compare/v14.0.0-nightly.2...v14.0.0-nightly.3) (2020-11-20)

**Note:** Version bump only for package hops-postcss





# [14.0.0-nightly.2](https://github.com/xing/hops/compare/v14.0.0-nightly.1...v14.0.0-nightly.2) (2020-11-13)

**Note:** Version bump only for package hops-postcss





# [14.0.0-nightly.1](https://github.com/xing/hops/compare/v13.0.0...v14.0.0-nightly.1) (2020-11-06)


### Bug Fixes

* update dependency mini-css-extract-plugin to v1 ([45344c4](https://github.com/xing/hops/commit/45344c4708be39bb1f82432aac50ebc8a09dfc25))
* update dependency style-loader to v2 ([0b2d3c9](https://github.com/xing/hops/commit/0b2d3c9c7fc0c18f8e1c266ce8d7e8dfe87d392e))


### Features

* add support for Node v15 ([75d22c8](https://github.com/xing/hops/commit/75d22c88db5beab3fa4f3edf29ccd5c5fb29fd2f))


### BREAKING CHANGES

* the `esModule` option is `true` by default, you need to change `const locals = require('./styles.css')`/`require('./styles.css')` to `import locals from './styles.css'`/`import './styles.css'`
* the `esModule` option is `true` by default, you need to change `const locals = require('./styles.css')`/`require('./styles.css')` to `import locals from './styles.css'`/`import './styles.css'`
