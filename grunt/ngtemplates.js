module.exports = {
  dev: {
    cwd: '<%= cwd %>/src',
    src: 'app/**/**.html',
    dest: '<%= cwd %>/dist/templates.js',
    options: {
      module: '<%= ngTemplates.moduleNamespace %>'
    }
  },
  build: {
    cwd: '<%= cwd %>/src',
    src: 'app/**/**.html',
    dest: '<%= cwd %>/dist/templates.js',
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
