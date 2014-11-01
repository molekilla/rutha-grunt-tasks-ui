module.exports = {
    options: {
      separator: ';',
    },
    dev: {
      src: ['<%= cwd %>/src/app/app.js',
      '<%= cwd %>/src/app/common/global/*.js',
      '<%= cwd %>/src/app/common/models/*.js',
      '<%= cwd %>/src/app/common/services/*.js',
      '<%= cwd %>/src/app/common/controllers/*.js',
      '<%= cwd %>/src/app/common/directives/*.js',
      '<%= cwd %>/src/app/common/**/*.js',
      '<%= cwd %>/src/app/**/*.js'],
      dest: '<%= cwd %>/dist/app.js'
    }, 
    build: {
      src: ['<%= cwd %>/src/app/app.js',
      '<%= cwd %>/src/app/common/global/*.js',
      '<%= cwd %>/src/app/common/models/*.js',
      '<%= cwd %>/src/app/common/services/*.js',
      '<%= cwd %>/src/app/common/controllers/*.js',
      '<%= cwd %>/src/app/common/directives/*.js',
      '<%= cwd %>/src/app/common/**/*.js',
      '<%= cwd %>/src/app/**/*.js'],
      dest: '<%= cwd %>/releases/v<%= pkg.version %>/app.js'
    }
  };
