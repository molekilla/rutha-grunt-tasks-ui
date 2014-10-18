module.exports = {
  dev: {
    options: {
      sourceMap: true,
      sourceMapIncludeSources: true,
      sourceMapName: '<%= cwd %>/dist/sourcemap.map',
      mangle: false
    },
    files: {
      '<%= cwd %>/dist/app.js': ['<%= cwd %>/dist/app.js']
    }
  },
  build: {
    options: {
      mangle: false
    },
    files: {
      '<%= cwd %>/releases/v<%= pkg.version %>/app.min.js': ['<%= cwd %>/releases/v<%= pkg.version %>/app.js']
    }
  }
};
