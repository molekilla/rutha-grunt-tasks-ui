module.exports = {
    dev: {
      files: {
        '<%= cwd %>/dist/app.min.css': ['<%= cwd %>/src/**/*.css']
      }
    },
    build: {
      files: {
        '<%= cwd %>/releases/v<%= pkg.version %>/app.min.css': ['<%= cwd %>/src/**/*.css']
      }
    }
};