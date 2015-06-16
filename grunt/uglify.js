module.exports = {
  dev: {
    options: {
      sourceMap: true,
      sourceMapIncludeSources: true,
      sourceMapName: '<%= cwd %>/www/js/sourcemap.map',
      mangle: false
    },
    files: {
      '<%= cwd %>/www/js/app.js': ['<%= cwd %>/www/js/app.js']
    }
  },
  buildDependencies: {
    options: {
      mangle: false
    },
    files: {
      '<%= cwd %>/releases/v<%= pkg.version %>/ui/www/js/deps.min.js': ['<%= cwd %>/releases/v<%= pkg.version %>/ui/www/js/deps.js']
    }
  },  
  build: {
    options: {
      mangle: false
    },
    files: {
      '<%= cwd %>/releases/v<%= pkg.version %>/ui/www/js/app.min.js': ['<%= cwd %>/releases/v<%= pkg.version %>/ui/www/js/app.js']
    }
  }
};
