module.exports = {
    devCssImages: {
        cwd: '<%= cwd %>/src/app/css',
        expand: true,
        src: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif'],
        dest: 'www/css/',
        flatten: false,
        filter: 'isFile'
    },
    devImages: {
        cwd: '<%= cwd %>/src/app/img',
        expand: true,
        src: '**',
        dest: 'www/img/',
        flatten: false,
        filter: 'isFile'
    },
    devFonts: {
        cwd: '<%= cwd %>/src/app/fonts',
        expand: true,
        src: '**',
        dest: 'www/fonts/',
        flatten: false,
        filter: 'isFile'
    },
    devAssets: {
        cwd: '<%= cwd %>/src/assets/',
        expand: true,
        src: '**',
        dest: 'www/',
        flatten: false,
        filter: 'isFile'
    },
    buildImages: {
        expand: true,
        cwd: '<%= cwd %>/src/app/img/',
        src: '**',
        dest: 'releases/v<%= pkg.version %>/ui/www/img/',
        flatten: false,
        filter: 'isFile'
    },
    buildAssets: {
        cwd: '<%= cwd %>/src/assets/',
        expand: true,
        src: '**',
        dest: 'releases/v<%= pkg.version %>/ui/www/',
        flatten: false,
        filter: 'isFile'
    },
    buildFonts: {
        expand: true,
        cwd: '<%= cwd %>/src/app/fonts/',
        src: '**',
        dest: 'releases/v<%= pkg.version %>/ui/www/fonts/',
        flatten: false,
        filter: 'isFile'
    },
    buildCssImages: {
        cwd: '<%= cwd %>/src/app/css',
        expand: true,
        src: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif'],
        dest: 'releases/v<%= pkg.version %>/ui/www/css/',
        flatten: false,
        filter: 'isFile'
    },
    copyViews: {
        expand: true,
        cwd: '<%= cwd %>/views',
        src: '**',
        dest: 'releases/v<%= pkg.version %>/ui/views/',
        flatten: false,
        filter: 'isFile'
    },
    buildFrontEnd: {
        expand: true,
        cwd: '<%= cwd %>',
        src: ['lib/**', 'config/**', 'package.json'],
        dest: 'releases/v<%= pkg.version %>/ui/'
            //    flatten: false,
            //    filter: 'isFile'    
    }
};