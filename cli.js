#! /usr/bin/env node

var fs = require('fs');
var ls = require('ls');
var moment = require('moment');

var dir = './tmp';

module.exports = class Cli {
   makeFoldel(dir) {
    if(!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        return true;
    }
    for (var file of ls('./*')) {
        console.log(file.name)
    }
    return false;
   }

   makeDateStingYYYYMM() {
    return moment().format('YYYYMM').toString();
   } 
};