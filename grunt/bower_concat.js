module.exports = function(grunt,  options) {
  var bowerOverrides = grunt.file.readJSON(options.cwd + '/bower.json').overrides;
  var keys = Object.keys(bowerOverrides);
  var overrideFiles = {};

  for (var i=0;i<keys.length;i++) {
    var key = keys[i];
    overrideFiles[key] = bowerOverrides[key].main;
  }
  
  return {
  
    dev: {
      dest: options.cwd + '/<%= devEnvironment.distFolder || "dist" %>/js/deps.js',
      cssDest: options.cwd + '/<%= devEnvironment.distFolder || "dist" %>/css/deps.css',
      exclude: options.bowerConcat.exclude || [],
      mainFiles: overrideFiles
    },
    
    build: {
      dest: options.cwd + '/releases/v' + options.pkg.version + '/ui/dist/js/deps.js',
      cssDest: options.cwd + '/releases/v' + options.pkg.version + '/ui/dist/css/deps.css',
      exclude: options.bowerConcat.exclude || [],
      mainFiles: overrideFiles
    }
  };
};
