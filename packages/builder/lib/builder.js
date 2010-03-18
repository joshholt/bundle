var seed     = require('seed'),
    haml     = seed.require('haml-js'),
    markdown = seed.require('markdown'),
    Builder  = exports;

/* 
  pesudo code
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
Builder.build = function(assetType, done) {
  //TODO implement the build function
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
};