module.exports = {
    options: {
      separator: ';',
    },
    dev: {
      cwd: '<%= cwd %>',
      src: ['<%= releaseInclude.js || "" %>', 'src/app/app.js',
      'src/app/common/global/*.js',
      'src/app/common/models/*.js',
      'src/app/common/services/*.js',
      'src/app/common/controllers/*.js',
      'src/app/common/directives/*.js',
      'src/app/common/**/*.js',
      'src/app/**/*.js'],
      dest: 'dist/js/app.js'
    }, 
    build: {
      cwd: '<%= cwd %>',
      src: ['<%= releaseInclude.js || "" %>', 'src/app/app.js',
      'src/app/common/global/*.js',
      'src/app/common/models/*.js',
      'src/app/common/services/*.js',
      'src/app/common/controllers/*.js',
      'src/app/common/directives/*.js',
      'src/app/common/**/*.js',
      'src/app/**/*.js'],
      dest: 'releases/v<%= pkg.version %>/ui/dist/js/app.js'
    }
  };
