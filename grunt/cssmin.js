module.exports = {
    dependencies: {
      cwd: '<%= cwd %>',
      files: {
        'www/css/deps.min.css': ['www/css/deps.css']
      }
    },  
    dev: {
      cwd: '<%= cwd %>',
      files: {
        'www/css/app.min.css': ['src/app/**/*.css']
      }
    },
    buildDependencies: {
      cwd: '<%= cwd %>',
      files: {
        'releases/v<%= pkg.version %>/ui/www/css/deps.min.css': ['www/css/deps.css']
    }
    },
    build: {
      cwd: '<%= cwd %>',
      files: {
        'releases/v<%= pkg.version %>/ui/www/css/app.min.css': ['src/app/**/*.css']
      }
    }
};