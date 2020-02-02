fs = require 'fs'


tmpFolder = (dir) -> 
    if !fs.existsSync(dir)
       fs.mkdirSync(dir)
       return true
    false

module.exports = tmpFolder
