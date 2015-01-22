var Help =  {
  autosync: 'Serves frontend service with auto reload',
  serve: 'Serves frontend service with no auto reload',
  spec: 'Runs jshint and server side / Karma - Jasmine specs',
  test: 'Runs E2E/Functional tests (Angular)',
  build: 'Prepares UI assets for release',
  jshinting: 'Verifies javascript using jshint',
  auditpkg: 'Verifies modules for any security issues',
  postinstall: 'Postinstall grunt shell script'
};

var tasks = function(grunt) {
  
  grunt.registerTask('postinstall', Help.postinstall, 'shell:postinstall');
  
  // server dev environment with browsersync
  grunt.registerTask('autosync', Help.autosync,
    ['ngtemplates:dev', 'concat:dev', 'ngAnnotate:dev', 'uglify:dev', 
     'bower_concat:dev', 'wiredep:dev', 'copy:devCssImages', 
     'copy:devImages', 'cssmin:dev', 'concurrent:auto']);
  
  // server dev environment no auto refresh
  grunt.registerTask('serve', Help.serve,
    ['ngtemplates:dev', 'concat:dev', 'ngAnnotate:dev', 'uglify:dev', 
     'bower_concat:dev', 'wiredep:dev', 'copy:devCssImages',
     'copy:devImages', 'cssmin:dependencies', 'cssmin:dev', 'concurrent:dev']);
    
  // runs server side specs and UI specs
  grunt.registerTask('spec', Help.spec,
    ['jshint', 'jasmine_node', 'ngtemplates:specs', 'wiredep:test', 'karma:unit']);

  // grunt build
  // builds deployment assets
  // 1) Build Angular templates
  // 2) Copy images
  // 3) Concat App
  // 4) Concat Bower
  // 5) Copy Views
  // 6) Copy UI App
  // 6) Annotate app.js
  // 7) Uglify app.js to app.min.js
  // 8) Minifies CSS
  // 9) Zip
  grunt.registerTask('build', Help.build,
    ['ngtemplates:build', 'copy:buildImages', 'copy:buildCssImages', 'bower_concat:build', 
     'copy:copyViews', 'copy:buildFrontEnd',
     'concat:build', 'ngAnnotate:build', 'uglify:build', 
     'cssmin:build', 'compress:build']);

  // runs functional tests
  grunt.registerTask('test', Help.test,
    ['concurrent:test']);

  // verfies javascript using jshint
  grunt.registerTask('jshinting', Help.jshinting,
    ['jshint']);

  // verifies security
  grunt.registerTask('auditpkg', Help.auditpkg,
    ['validate-package']);
};

function Loader(grunt) {
    return {
        help: Help,
        registerTasks: function() {
            return tasks(grunt);
        }
    };
}


module.exports = Loader;