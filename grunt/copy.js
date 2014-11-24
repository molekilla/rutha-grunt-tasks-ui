module.exports = {
    devImages: {
        expand: true,
        cwd: '<%= cwd %>',
        src: 'src/app/img/**',
        dest: 'dist/img/',
        flatten: true,
        filter: 'isFile'
    },
    buildImages: {
        expand: true,
        cwd: '<%= cwd %>',
        src: 'src/app/img/**',
        dest: 'releases/v<%= pkg.version %>/img/',
        flatten: true,
        filter: 'isFile'
    }
};