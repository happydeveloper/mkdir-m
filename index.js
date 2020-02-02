#! /usr/bin/env node

var folder  = require('./lib/cli.js');
var cdates = require('./lib/custom-date.js');
var File = require('./lib/file-count.js');


if(folder(cdates()+'_'+File.cntFolder(cdates())))
console.log("Created Month Folder : " + cdates()+'_'+File.cntFolder(cdates()));