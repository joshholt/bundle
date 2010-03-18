// ==========================================================================
// Project:   bundlr - Manifest Builder -- Asset Locator -- Localizer
// Copyright: ©2009-2010 Josh Holt
// License:   Licened under MIT license
// ==========================================================================
/*globals process __filename __dirname */

/**
  @file
  
  A simple API for finding assets and managing localization in CommonJS code
  
*/
var seed = require('seed'),
    Package = require('seed:package'),
    Co = require('seed:private/co'),
    pkgPath = Co.path.join(Co.path.dirname(__filename),'..'), builders,virtual,
    Bundle = exports;
    



var getBuilderDefs = function(path, done) {
  Package.open(pkgPath, function(err,pkg){
    if (err) return done(err);
    if (pkg.info('builders')){ 
      return done(null,path,pkg.info('builders'));
    } else {
      return done(new Error("No budilers defined"));
    }
  });
};

var getVirtualAssetDefs = function(path, builders, done) {
  Package.open(pkgPath, function(err,pkg){
    if (err) return done(err);
    if (pkg.info('bundle-assets')) { 
      return done(null, path, builders,pkg.info('bundle-assets'));
    } else {
      return done(new Error("No virtual assets defined"));
    }
  });
};

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
  */
  
  return done(null,assets);
};

Bundle.asset = function(assetRef) {
  if (!assetRef) throw new Error("No asset reference provided");
  var normalizedPath = Co.path.normalize(assetRef),
      filter = /[^\.(js|ds_store)]$/i;
  Co.chain(getFiles, buildVirtualAssests)(normalizedPath, 
    filter, function(err,success){
      if (err) throw err;
      Co.sys.puts(Co.sys.inspect(success));
  });
};
// ..........................................................
// JUST FOR TESTING (GOTTA find a better way.)
// 
Co.wait(function(done){
  Co.chain(getBuilderDefs,getVirtualAssetDefs)(pkgPath,
    function(err,pth,blds,vas){
      if(err) return done(err);
      if(blds) Bundle.builders = blds;
      if(vas) Bundle.virtuals = vas;
      return done(null,"success");
    });
});