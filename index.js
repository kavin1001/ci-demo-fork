#!/usr/local/bin/node

const os = require('os');
const { v4: uuidv4 } = require('uuid');

console.log('Hello World: ' + uuidv4());
console.log('Total system memory: ' + os.totalmem());
console.log('Free system memory: ' + os.freemem());