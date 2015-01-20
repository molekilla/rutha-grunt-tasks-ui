module.exports = {
  devCssImages: {
    cwd: '<%= cwd %>/src/app/css',
    expand: true,
    src: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif'],
    dest: 'dist/css/',
    flatten: false,
    filter: 'isFile'    
  },
  devImages: {
    cwd: '<%= cwd %>/src/app/img',
    expand: true,
    src: '**',
    dest: 'dist/img/',
    flatten: false,
    filter: 'isFile'    
  },
  buildImages: {
    expand: true,
    cwd: '<%= cwd %>/src/app/img/',
    src: '**',
    dest: 'releases/v<%= pkg.version %>/ui/public/img/',
    flatten: true,
    filter: 'isFile'
  },
  buildCssImages: {
    cwd: '<%= cwd %>/src/app/css',
    expand: true,
    src: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif'],
    dest: 'releases/v<%= pkg.version %>/ui/public/css/',
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