#!/usr/bin/env node

const program = require('commander');

program
  .version('0.1.0')
  .option('-C, --chdir <path>', 'change the working directory')
  .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
  .option('-T, --no-tests', 'ignore test hook');

program
  .command('setup [env]')
  .description('run setup commands for all envs')
  .option('-s, --setup_mode [mode]', 'Which setup mode to use')
  .action((env, options) => {
    const mode = options.setup_mode || 'normal';
    const envArg = env || 'all';
    console.log('setup for %s env(s) with %s mode', envArg, mode);
  });

program
  .command('exec <cmd>')
  .alias('ex')
  .description('execute the given remote cmd')
  .option('-e, --exec_mode <mode>', 'Which exec mode to use')
  .action((cmd, options) => {
    console.log('exec "%s" using %s mode', cmd, options.exec_mode);
  })
  .on('--help', () => {
    console.log('  Examples:');
    console.log();
    console.log('    $ deploy exec sequential');
    console.log('    $ deploy exec async');
    console.log();
  });

program
  .command('*')
  .action((env) => {
    console.log('deploying "%s"', env);
  });

program.parse(process.argv);
