module.exports = {
  build: {
    options: {
      archive: 'releases/v<%= pkg.version %>.zip'
    },
    files: [
      {
        cwd: '<%= cwd %>',
        src: ['releases/v<%= pkg.version %>/ui/**'], 
        dest: '.'
      }
    ]
  }  
};