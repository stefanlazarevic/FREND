var clc = require('cli-color');

const temp = clc.xterm(23)(`Temp: `),
      key  = clc.xterm(58);

module.exports.temp = temp;
module.exports.key = key;
