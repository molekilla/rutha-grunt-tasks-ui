module.exports = {
  dev: {
    cwd: '<%= cwd %>/www/html/src',
    src: 'app/**/*.html',
    dest: '<%= cwd %>/www/js/templates.js',
    options: {
      module: '<%= ngTemplates.moduleNamespace %>'
    }
  },
   ionic: {
    cwd: '<%= cwd %>/www/html/src',
    src: 'app/**/*.html',
    dest: '<%= cwd %>/www/js/templates.js',
    options: {
      module: '<%= ngTemplates.moduleNamespace %>'
    }
  },
  specs: {
    cwd: '<%= cwd %>/www/html/src',
    src: 'app/**/*.html',
    dest: '<%= cwd %>/src/test/templates.js',
    options: {
      module: '<%= ngTemplates.moduleNamespace %>'
    }
  },
  build: {
    cwd: '<%= cwd %>/www/html/src',
    src: 'app/**/*.html',
    dest: '<%= cwd %>/releases/v<%= pkg.version %>/ui/www/js/templates.js',
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
