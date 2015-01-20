module.exports = {
    dependencies: {
      cwd: '<%= cwd %>',
      files: {
        'dist/css/deps.min.css': ['<%= releaseInclude.css %>', 'dist/css/deps.css']
      }
    },  
    dev: {
      cwd: '<%= cwd %>',
      files: {
        'dist/css/app.min.css': ['src/**/*.css']
      }
    },
    build: {
      cwd: '<%= cwd %>',
      files: {
        'releases/v<%= pkg.version %>/ui/public/css/app.min.css': ['<%= releaseInclude.css || "" %>', 'src/**/*.css']
      }
    }
};