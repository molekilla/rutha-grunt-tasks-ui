module.exports = {
  html: {
    expand: true,
    cwd: '<%= cwd %>',
    src: ['src/app/**/*.html'],
    dest: 'dist/html/'
  },
  ionic: {
    expand: true,
    cwd: '<%= cwd %>',
    src: ['src/app/**/*.html', '!src/app/index.html'],
    dest: 'www/html/'
  }    
};
