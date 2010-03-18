// ==========================================================================
// Project:   bundlr - Manifest Builder -- Asset Locator -- Localizer
// Copyright: ©2009-2010 Josh Holt
// License:   Licened under MIT license
// ==========================================================================
/*globals process */

/**
  @file
  
  A simple API for finding assets and managing localization in CommonJS code
  
*/
var seed = require('seed');
var Co = require('seed:private/co');
//var builder = require('builder:builder');
var Bundlr = exports;

var seed     = require('seed'),
    haml     = seed.require('haml-js'),
    markdown = seed.require('markdown'),
    Builder  = exports;

var getFiles = function(path, filter, done) {
  Co.fs.glob(path, filter, function(err, success){
    if (err) return done(err);
    return done(null,success);
  });
};

var buildVirtualAssests = function(assets, done) {
  //TODO implement the build function
  /* 
    pseudo code
    1. gather all types being used to build virtual assets {
      2. gather all assets of a type {
        3. then build by passing the files through the respective parser
      }(combineContentsIfPossible, writeToDisk)
    }(loop)
    (1) var storeVirtualAssetTypesAndNames = function(config, done) {}; 
    (2) var findAssetsNeedingBuildForType = function(assets,done) {};
    (3) var build = function(--,--) {}

    Co.chain(1,2,3)(--,--,--);
  */
  
  return function(done) {
    switch(assetType){
      case 'haml':
        // run through haml parser
        break;
      case 'markdown':
        // run through markdown parser
        break;
    }
  };
  return done(null,assets);
};

Bundlr.asset = function(assetPath) {
  if (!assetPath) throw new Error("No asset reference provided");
  var normalizedPath = Co.path.normalize(assetPath),
      filter = /[^\.(js|ds_store)]$/i;
  Co.chain(getFiles, buildVirtualAssests)(normalizedPath, 
    filter, function(err,success){
      if (err) throw err;
      Co.sys.puts(Co.sys.inspect(success));
  });
};