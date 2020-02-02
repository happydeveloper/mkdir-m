ls = require 'ls'

exports.cntFolder = cntFile = (file_name)->
    files = ls('./'+file_name+'*', 'dir')
    console.log(file) for file in files

    return files.length;
