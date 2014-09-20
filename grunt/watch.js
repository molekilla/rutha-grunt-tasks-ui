module.exports = {
  gruntfile: {
    files: '<%= jshint.gruntfile.src %>',
    tasks: ['jshint:gruntfile']
  },
  ui: {
   files: ['<%= cwd %>/views/**/*.html', '<%= cwd %>/src/**/*.html', '<%= cwd %>/src/**/*.js', '<%= cwd %>/lib/**/*.js', '<%= cwd %>/spec/**/*.js'],
   tasks: ['ngtemplates:dev', 'concat:dev', 'ngAnnotate', 'cssmin', 'wiredep']
  },
  css: {
   files: ['<%= cwd %>/src/**/*.css'],
   tasks: ['cssmin']
  }
};
