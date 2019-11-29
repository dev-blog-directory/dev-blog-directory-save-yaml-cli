# DEV-BLOG-DIRECTORY: save-yaml-cli

[![NPM Version][npm-version-image]][npm-url]
[![LICENSE][license-image]][license-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![dependencies Status][dependencies-image]][dependencies-url]
[![devDependencies Status][devDependencies-image]][devDependencies-url]

A CLI for saves the YAML format blog list to `documents/*.yml`.

## Installation

```sh
npm install dev-blog-directory-save-yaml-cli
```

## Usages
```sh
$ npx save-blog [--merge] [YAMLFILE]

# or

$ npx save-blog-yaml [--merge] [YAMLFILE]
```

If `YAMLFILE` is not provided, `new.yml` will be used.

## Related

- [dev-blog-directory](https://github.com/dailyrandomphoto/dev-blog-directory) - A Developer Blog Directory.
- [dev-blog-directory-raw](https://github.com/dailyrandomphoto/dev-blog-directory-raw) - Raw data storage of [Developer Blog Directory](https://github.com/dailyrandomphoto/dev-blog-directory).
- [dev-blog-directory-save](https://github.com/dailyrandomphoto/dev-blog-directory-save) - API for save new blogs to [dev-blog-directory-raw](https://github.com/dailyrandomphoto/dev-blog-directory-raw).
- [dev-blog-directory-save-json-cli](https://github.com/dailyrandomphoto/dev-blog-directory-save-json-cli) - A CLI for saves the JSON format blog list to `documents/*.yml`.

## License
Copyright (c) 2019 [dailyrandomphoto][my-url]. Licensed under the [MIT license][license-url].

[my-url]: https://github.com/dailyrandomphoto
[npm-url]: https://www.npmjs.com/package/dev-blog-directory-save-yaml-cli
[travis-url]: https://travis-ci.org/dailyrandomphoto/dev-blog-directory-save-yaml-cli
[coveralls-url]: https://coveralls.io/github/dailyrandomphoto/dev-blog-directory-save-yaml-cli?branch=master
[license-url]: LICENSE
[dependencies-url]: https://david-dm.org/dailyrandomphoto/dev-blog-directory-save-yaml-cli
[devDependencies-url]: https://david-dm.org/dailyrandomphoto/dev-blog-directory-save-yaml-cli?type=dev

[npm-downloads-image]: https://img.shields.io/npm/dm/dev-blog-directory-save-yaml-cli
[npm-version-image]: https://img.shields.io/npm/v/dev-blog-directory-save-yaml-cli
[license-image]: https://img.shields.io/npm/l/dev-blog-directory-save-yaml-cli
[travis-image]: https://img.shields.io/travis/dailyrandomphoto/dev-blog-directory-save-yaml-cli
[coveralls-image]: https://img.shields.io/coveralls/github/dailyrandomphoto/dev-blog-directory-save-yaml-cli
[dependencies-image]: https://img.shields.io/david/dailyrandomphoto/dev-blog-directory-save-yaml-cli
[devDependencies-image]: https://img.shields.io/david/dev/dailyrandomphoto/dev-blog-directory-save-yaml-cli
