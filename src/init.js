const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');

const isDir = (name) => {
  const target = path.resolve(process.cwd(), path.join('.', name));
  try {
    const sign = fs.statSync(target).isDirectory();
    return !sign && true;
  } catch (err) {
    return true;
  }
};

const promptAns = (name) => {
  const ans = inquirer.prompt([
    {
      name: 'name',
      message: 'the package name:',
      default: name,
    },
    {
      name: 'version',
      message: 'the package version:',
      default: '0.0.1',
    },
    {
      name: 'desc',
      message: 'the description of the package:',
      default: name,
    },
    {
      name: 'author',
      message: 'author:',
    },
    {
      name: 'license',
      message: 'license:',
      default: null,
    },
  ]);
  return ans;
};

const createProject = (name) => {
  console.log('create project.');
  promptAns(name).then((ans) => {
    console.log(`your package name is：${ans.name}`);
    console.log(`your package version is：${ans.version}`);
    console.log(`your package description is：${ans.desc}`);
  });
};

const init = (program, name) => {
  // params name is required
  if (!name) {
    program.help();
  }

  // check the project name
  if (isDir(name)) {
    createProject(name);
  } else {
    console.log('project is already existed.');
  }
};

export default init;
