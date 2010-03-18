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

var getFiles = function(path, filter, done) {
  Co.fs.glob(path, filter, function(err, success){
    if (err) return done(err);
    return done(null,success);
  });
};

var buildVirtualAssests = function(assets, done) {
  //TODO: implement this
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