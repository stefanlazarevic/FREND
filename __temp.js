#!/usr/bin/env node
const fs = require('fs');
const arg = process.argv;
const numOfArguments = arg.length;
const { fileController } = require('./_temp/temp_file.js');
const { pugFile } = require('./_temp/temp_content.js');

const key_one = arg[2];
const key_two = arg[3];
const key_three = arg[4];
const key_four = arg[5];
const key_five = arg[6];
const key_six = arg[7];

switch(numOfArguments){
  case 5:
    if(key_one == 'make' && key_two == 'page'){
      fileController.writeFile(fileController.pugPath, key_three, 'pug', pugFile);
    }
    else if(key_one == 'remove' && key_two == 'page'){
      fileController.removeFile(fileController.pugPath, key_three, 'pug');
      fileController.removeFile(fileController.htmlPath, key_three, 'html');
    }
    else if(key_one == 'set' && key_two == 'grid'){
      if(Number.isInteger(parseInt(key_three)) && key_three > 0){
        console.log(fileController.checkForFile(fileController.sassConfPath, '_conf', 'sass'));
        fileController.editFile(fileController.sassConfPath, '_conf', 'sass', /\$grid-size: .*/g , `$grid-size: ${key_three}px`);
      }
      else{
        console.log("Parameter must be a number");
      }
    }
  break;

  case 7:
    if(key_one == 'set' && key_two == 'grid' && key_four == '-p'){
      if(Number.isInteger(parseInt(key_three)) && key_three > 0){
        fileController.editFile(fileController.sassConfPath, '_conf', 'sass', /\$grid-size: .*/g , `$grid-size: ${key_three}`);
        setTimeout(() => {
          fileController.editFile(fileController.sassConfPath, '_conf', 'sass', /\$grid-column-side-padding: .*/g , `$grid-column-side-padding: ${key_five}`);
        }, 400);
      }
      else{
        console.log("Parameter must be a number");
      }
    }
  break;
}
