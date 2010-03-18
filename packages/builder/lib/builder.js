var seed     = require('seed'),
    haml     = seed.require('haml-js'),
    markdown = seed.require('markdown'),
    Builder  = exports;

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