#!/usr/local/bin/node

const { v4: uuidv4 } = require('uuid');
const os = require('os');

console.log('Hello World: ' + uuidv4())
console.log('Total system memory: ' + os.totalmem());
console.log('Free system memory: ' + os.freemem());