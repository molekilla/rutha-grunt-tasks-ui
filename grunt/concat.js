module.exports = {
    options: {
      separator: ';',
    },
    dev: {
      src: ['<%= cwd %>/src/app/**/*.js'],
      dest: '<%= cwd %>/dist/app.js',
    },
    build: {
      src: ['<%= cwd %>/src/app/**/*.js'],
      dest: '<%= cwd %>/dist/app.js'
    }
  };
