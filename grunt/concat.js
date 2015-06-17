module.exports = {
    options: {
      separator: ';',
    },
    ionic: {
      cwd: '<%= cwd %>',
      src: ['src/app/app.js',
      'src/app/common/global/*.js',
      'src/app/common/models/*.js',
      'src/app/common/services/*.js',
      'src/app/common/controllers/*.js',
      'src/app/common/directives/*.js',
      'src/app/common/**/*.js',
      'src/app/**/*.js'],
      dest: 'www/js/app.js'
    },    
    dev: {
      cwd: '<%= cwd %>',
      src: ['src/app/app.js',
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
      src: ['src/app/app.js',
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
