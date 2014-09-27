module.exports = {
  options: {
    singleQuotes: true,
    ngAnnotateOptions: {}
  },
  dev: {
    files: {
      '<%= cwd %>/dist/app.js': ['<%= cwd %>/dist/app.js']
    }
  },
  build: {
    files: {
      '<%= cwd %>/releases/v<%= pkg.version %>/app.js': ['<%= cwd %>/releases/v<%= pkg.version %>/app.js']
    }
  }
};