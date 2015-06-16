module.exports = {
  dev: {
    bsFiles: {
      src: ['<%= cwd %>/lib/**/*.js',
      '<%= cwd %>/www/**/*.js',
      '<%= cwd %>/src/**/*.js',
      '<%= cwd %>/views/**/*.html']
    },
    options: {
      debugInfo: true,
      reloadDelay: 150,
      //host: true
      proxy: 'localhost:3005'
    }
  }
};
