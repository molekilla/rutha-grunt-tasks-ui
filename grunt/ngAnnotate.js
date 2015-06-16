module.exports = {
  options: {
    singleQuotes: true,
    ngAnnotateOptions: {}
  },
  dev: {
    files: {
      '<%= cwd %>/www/js/app.js': ['<%= cwd %>/www/js/app.js']
    }
  },
  build: {
    files: {
      '<%= cwd %>/releases/v<%= pkg.version %>/ui/www/js/app.js': ['<%= cwd %>/releases/v<%= pkg.version %>/ui/www/js/app.js']
    }
  }
};