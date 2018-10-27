# npg

> `npg` -> `node package generator`

`npg` is a command line tool to generate a node package with a basic template.

## Screenshot

![npg](http://orhcxc3kd.bkt.clouddn.com/npg.png)

## Installation

```shell
npm install @gin/npg -g
```

## Usage

```shell
$ npg -h
Usage: npg <command> [options]

Options:
  -V, --version  output the version number
  -h, --help     output usage information

Commands:
  init|i [name]  generate a new node module
```

## Structure

```
Your Node Package
├── README.md
├── .npmignore
├── .babelrc
├── .eslintrc.js
├── .gitignore
├── package.json
└── src
    └── index.js

```

* all the source files of the package would be put in the `src` directory.
* when you want to publish the package, run `npm run build` to build `src` to `lib`.
* eslint rules were base on `airbnb`, you can run `npm run lint` to check your code.

## License
MIT