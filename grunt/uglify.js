module.exports = {
  dev: {
    options: {
      sourceMap: true,
      sourceMapIncludeSources: true,
      sourceMapName: '<%= cwd %>/dist/sourcemap.map',
      mangle: false
    },
    files: {
      '<%= cwd %>/dist/app.js': ['<%= cwd %>/src/app/**/*.js']
    }
  },
  build: {
    options: {
      sourceMap: true,
      sourceMapIncludeSources: true,
      sourceMapName: '<%= cwd %>/dist/sourcemap.map'
    },
    files: {
      '<%= cwd %>/dist/app.js': ['<%= cwd %>/src/app/**/*.js']
    }
  }
};
