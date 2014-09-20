module.exports = {
    combine: {
      files: {
        '<%= cwd %>/dist/app.min.css': ['<%= cwd %>/src/**/*.css']
      }
    }
};