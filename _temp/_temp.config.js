#!/usr/bin/env node
const info = {
  name: "front_template",
  version: '1.4.1',
  author: 'Stefan Lazarevic',
  license: 'MIT',
  description: "Basic markup for frontend projects."
}

function showInfo(){
  console.log(JSON.stringify(info, null, 4));
}

module.exports.showInfo = showInfo;
