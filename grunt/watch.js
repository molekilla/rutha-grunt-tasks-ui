module.exports = {
  gruntfile: {
    files: '<%= jshint.gruntfile.src %>',
    tasks: ['jshint:gruntfile']
  },
  frontEndES6: {
    files: ['<%= cwd %>/lib/**/*.es6'],
    tasks: ['babel:dev']
  },
  ui: {
   files: ['<%= cwd %>/views/**/*.html', '<%= cwd %>/src/**/*.html', '<%= cwd %>/src/**/*.js', '<%= cwd %>/lib/**/*.js', '<%= cwd %>/spec/**/*.js'],
   tasks: ['preprocess:html','ngtemplates:dev', 'concat:dev', 'ngAnnotate:dev', 'wiredep:dev']
  },
  css: {
   files: ['<%= cwd %>/src/**/*.css'],
   tasks: ['cssmin:dev']
  }
};
