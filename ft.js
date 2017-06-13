#!/usr/bin/env node
const fs = require('fs');

const numOfArguments = process.argv.length;

var o = {
  version: '1.0.0'
}

let writeFile = function(path, name, ext, content){
  if(fs.existsSync(`.${path}/${name}.${ext}`)){
    console.error('File already exists.');
    return;
  }
  fs.writeFile(`.${path}/${name}.${ext}`, `${content}`, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("File created.");
})};

const pugFile = `extends ../2-layouts/app.pug

//- Change in variables.pug file
block title
  title #{indexTitle}

block content
  main(role="main").container`;

switch(numOfArguments){
  case 2:
    console.log('Use ft --help or ft -help to see all available commands.');
    break;
  case 3:
    let cm31 = process.argv[2];
    if(cm31 == '-v'){
      console.log(`Front template: v${o.version}`);
    }
    else if(cm31 == '--help' || cm31 == '-help'){
      console.log('\n[Commands]\n');
      console.log("-- ft make [page] [name]");
      console.log('\n-------------------------');
    }
    break;
  case 5:
    let cm51 = process.argv[2];
    let cm52 = process.argv[3];
    let cm53 = process.argv[4];
    if(cm51 == 'make' && cm52 == 'page'){
      writeFile('/src/pug/4-pages/', cm53, 'pug', pugFile);
    }
    break;
  default:
    console.error('Command not found.')
}
