const fs = require('fs');
var clc = require('cli-color');
const { temp, key } = require('./temp_console.js');

class FileController{
  constructor(){
    this.pugPath = 'src/pug/4-pages';
    this.htmlPath = 'dist';
    this.sassConfPath = 'src/sass/0-config';
  }

  checkForFile(path, name, ext){
    return fs.existsSync(`./${path}/${name}.${ext}`);
  }

  writeFile(path, name, ext, content){
    if(this.checkForFile(path, name, ext)){
      console.log(clc.red('Error: ') + 'File already exists.');
      return;
    }
    fs.writeFile(`./${path}/${name}.${ext}`, `${content}`, function(err) {
      if(err) return console.log(err);
      console.log(temp + `File ${name}.${ext} successfully created.`);
    });
  }

  editFile(path, name, ext, toReplace, replacement){
    if(!this.checkForFile(path, name, ext)){
      console.log(clc.red('Error: ') + 'File not found.');
      return;
    }
    fs.readFile(`./${path}/${name}.${ext}`, 'utf8', function (err,data) {
      if (err) { return console.log(err); }
      const result = data.replace(toReplace, replacement);
      fs.writeFile(`./${path}/${name}.${ext}`, result, function(err) {
        if(err) return console.log(err);
        console.log(temp + `File ${name}.${ext} successfully edited.`);
      });
    });
  }

  removeFile(path, name, ext){
    if(!this.checkForFile(path, name, ext)){
      console.log(clc.red('Error: ') + 'File not found.');
      return;
    }
    fs.unlinkSync(`./${path}/${name}.${ext}`);
    console.log(temp + `${name}.${ext} successfully removed.`);
  }
}

const fileController = new FileController();

module.exports.fileController = fileController;
