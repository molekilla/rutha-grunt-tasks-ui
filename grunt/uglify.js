module.exports = {
  dev: {
    options: {
      sourceMap: true,
      sourceMapIncludeSources: true,
      sourceMapName: '<%= cwd %>/dist/js/sourcemap.map',
      mangle: false
    },
    files: {
      '<%= cwd %>/dist/js/app.js': ['<%= cwd %>/dist/js/app.js']
    }
  },
  build: {
    options: {
      mangle: false
    },
    files: {
      '<%= cwd %>/releases/v<%= pkg.version %>/ui/public/js/app.min.js': ['<%= cwd %>/releases/v<%= pkg.version %>/ui/public/js/app.js']
    }
  }
};
