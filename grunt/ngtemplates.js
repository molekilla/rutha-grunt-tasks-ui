module.exports = {
  dev: {
    cwd: '<%= cwd %>/src',
    src: 'app/**/**.html',
    dest: '<%= cwd %>/dist/js/templates.js',
    options: {
      module: '<%= ngTemplates.moduleNamespace %>'
    }
  },
  specs: {
    cwd: '<%= cwd %>/src',
    src: 'app/**/**.html',
    dest: '<%= cwd %>/src/test/templates.js',
    options: {
      module: '<%= ngTemplates.moduleNamespace %>'
    }
  },
  build: {
    cwd: '<%= cwd %>/src',
    src: 'app/**/**.html',
    dest: '<%= cwd %>/releases/v<%= pkg.version %>/ui/public/js/templates.js',
    options: {
      module: '<%= ngTemplates.moduleNamespace %>',
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: false,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    }
  }
};
