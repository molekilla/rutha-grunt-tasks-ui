module.exports = {
    dependencies: {
      cwd: '<%= cwd %>',
      files: {
        'dist/css/deps.min.css': ['<%= (releaseInclude.css && releaseInclude.css.length > 0 ) || "!fooo.css" %>', 'dist/css/deps.css']
      }
    },  
    dev: {
      cwd: '<%= cwd %>',
      files: {
        'dist/css/app.min.css': ['src/**/*.css']
      }
    },
    buildDependencies: {
      cwd: '<%= cwd %>',
      files: {
        'releases/v<%= pkg.version %>/ui/dist/css/deps.min.css': ['<%= (releaseInclude.css && releaseInclude.css.length > 0 ) || "!fooo.css" %>', 'dist/css/deps.css']
    }
    },
    build: {
      cwd: '<%= cwd %>',
      files: {
        'releases/v<%= pkg.version %>/ui/dist/css/app.min.css': ['<%= (releaseInclude.css && releaseInclude.css.length > 0 ) || "!fooo.css" %>', 'src/**/*.css']
      }
    }
};