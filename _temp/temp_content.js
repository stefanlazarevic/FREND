const pugFile = `extends ../2-layouts/app.pug

//- Change in variables.pug file
block title
  title #{indexTitle}

block content
  main(role="main").container`;

module.exports.pugFile = pugFile;
