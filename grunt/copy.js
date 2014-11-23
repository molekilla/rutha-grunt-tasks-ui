module.exports = {
    devImages: {
      src: '<%= cwd %>/src/app/img/*',
      dest: '<%= cwd %>/dist/img'
    },
    buildImages: {
      src: '<%= cwd %>/src/app/img/*',
      dest: '<%= cwd %>/releases/v<%= pkg.version %>/img'
    }
};