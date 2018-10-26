const path = require('path');
const fs = require('fs');

const isDir = (name) => {
  const target = path.resolve(process.cwd(), path.join('.', name));
  try {
    const isDir = fs.statSync(target).isDirectory();
    if (isDir) {
      return false;
    } else {
      return true;
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      return true;
    }
  };
}

const init = (program, name) => {
  // params name is required
  if (!name) {
    program.help();
  }

  // check the project name
  if (isDir(name)) {
    console.log('create project.');
  } else {
    console.log('project is already existed.');
  }
};
 
export default init;
