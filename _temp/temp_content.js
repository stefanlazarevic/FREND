const pugFile = `extends ../2-layouts/app.pug

//- Change in variables.pug file
block title
  title #{indexTitle}

block content
  main(role="main").container

block scriptBefore

block scriptAfter`;

module.exports.pugFile = pugFile;
