var assert  = require('assert');
var folder  = require('../lib/cli.js');
var cdates = require('../lib/custom-date.js');
var File = require('../lib/file-count.js');

describe('#ModuleMakeFoloder', function() {
  it('폴더 만들기', function () {
    assert.equal(false, folder('a_002'));
  });

  it('폴더 갯수 세기', function () {
    assert.equal(2, File.cntFolder('a'));
  });

  it('현재 날짜 YYYYMM  형태로 가져오기', function () {
    var expect = "202002";
    assert.equal(expect, cdates());
  });

  it('YYYYMM_N  폴더이름 만들기', function () {
    assert.equal(true, folder(cdates()+'_'+File.cntFolder(cdates())));
  });
});
