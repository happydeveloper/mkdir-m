moment = require 'moment'
getFolderNameYYMMNNN = ->
    return moment().format('YYYYMM').toString();

module.exports = getFolderNameYYMMNNN
