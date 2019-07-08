#! /usr/bin/env node

const InnohubTest = require('./lib/InnohubTest');
// get params from execution
let option = process.argv[2];
let params = process.argv.slice(3);

let it = new InnohubTest();
let output;

switch (option) {
  case '--reverse':
  case 'reverse':
    output = [];
    params.forEach(e => output.unshift(it.reverse(e)));
    output = output.join(' ');
    break;
  case '--plusIndex':
  case 'plusIndex':
    output = [];
    params.forEach(e => output.push(it.plusIndex(e)));
    output = output.join(' ');
  default:
    break;
}

console.log(output);