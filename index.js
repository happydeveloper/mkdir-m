#!/usr/bin/env node

var folder  = require('./lib/cli.js');
var cdates = require('./lib/custom-date.js');
var File = require('./lib/file-count.js');
var exec = require('child_process').exec;


var newDirName =  cdates()+'_'+File.cntFolder(cdates());
if(folder(newDirName))
    console.log("Created Month Folder : " + newDirName);

var commands = [
    `ls -al`
]

exec(commands.join('&&'), function callback(error, stdout, stderr) {
    if (error) {
        console.log('error : ' + error);
    }

    console.log("execute ls -al");
});