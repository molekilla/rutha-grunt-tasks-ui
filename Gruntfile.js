var Help =  {
  autosync: 'Serves frontend service with auto reload',
  serve: 'Serves frontend service with no auto reload',
  spec: 'Runs jshint and server side / Karma - Jasmine specs',
  test: 'Runs E2E/Functional tests (Angular)',
  build: 'Prepares UI assets for release',
  jshinting: 'Verifies javascript using jshint',
  auditpkg: 'Verifies modules for any security issues'
};

var tasks = function(grunt) {
  // server dev environment with browsersync
  grunt.registerTask('autosync', Help.autosync,
    ['ngtemplates:dev', 'concat:dev', 'ngAnnotate:dev', 'uglify:dev', 'wiredep:dev', 'copy:devImages', 'cssmin:dev', 'concurrent:auto']);
  
  // server dev environment no auto refresh
  grunt.registerTask('serve', Help.serve,
    ['ngtemplates:dev', 'concat:dev', 'ngAnnotate:dev', 'uglify:dev', 'wiredep:dev', 'copy:devImages', 'cssmin:dev', 'concurrent:dev']);
    
  // runs server side specs and UI specs
  grunt.registerTask('spec', Help.spec,
    ['jshint', 'jasmine_node', 'ngtemplates:specs', 'wiredep:test', 'karma:unit']);

  // builds deployment assets
  grunt.registerTask('build', Help.build,
    ['ngtemplates:build', 'copy:buildImages', 'concat:build', 'ngAnnotate:build', 'uglify:build', 'cssmin:build']);

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