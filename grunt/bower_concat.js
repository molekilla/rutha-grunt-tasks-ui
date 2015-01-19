module.exports = function(grunt,  options) {
  var bowerOverrides = grunt.file.readJSON(options.cwd + '/bower.json').overrides;
  var keys = Object.keys(bowerOverrides);
  var overrideFiles = {};

  for (var i=0;i<keys.length;i++) {
    var key = keys[i];
    overrideFiles[key] = bowerOverrides[key].main;
  }
  
  return {
    build: {
      dest: options.cwd + '/releases/v' + options.pkg.version + '/bower_deps.js',
      cssDest: options.cwd + '/releases/v' + options.pkg.version + '/bower_deps.css',
      exclude: options.bowerConcat.exclude || [],
      mainFiles: overrideFiles
    }
  };
};
