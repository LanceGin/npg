#!/usr/bin/env node

const program = require('commander');
const init = require('./init.js');
const packageInfo = require('../package.json');

program
  .version(packageInfo.version)
  .usage('<command> [options]');

program
  .command('init [name]')
  .description('generate a new node module')
  .alias('i')
  .action((name) => {
    init(name);
  });

program
  .command('*')
  .action((env) => {
    console.log(`command '${env}' not found... `);
    program.help();
  });

program.parse(process.argv);

if (program.args.length === 0) {
  program.help();
}
