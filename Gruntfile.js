var Help =  {
  serve: 'Serves frontend service with no auto reload',
  spec: 'Runs jshint and server side / Karma - Jasmine specs',
  test: 'Runs E2E/Functional tests (Angular)',
  build: 'Prepares UI assets for release',
  jshinting: 'Verifies javascript using jshint',
  auditpkg: 'Verifies modules for any security issues',
  postinstall: 'Postinstall grunt shell script',
  staging: 'Provisions a local staging VM',
  deploy: 'Provisions a new deployment or updates existing',
  ionic: 'Serves frontend service with ionic'
};

var tasks = function(grunt) {
  // https://github.com/gruntjs/grunt/issues/992
    
  grunt.registerTask('checkProvision', function() {
      // if (grunt.option('ack') !== true) { return true; }
      var done = this.async();
      var readline = require('readline');
      var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      rl.question('Do you want to provision staging? (Y/n)', function(answer) {
        rl.close();
        if (answer.toLowerCase() === 'n') {
          done(false);
        } else {
          done();
        }
      });
  });
                     
  grunt.registerTask('checkDeployment', function() {
      // if (grunt.option('ack') !== true) { return true; }
      var done = this.async();
      var readline = require('readline');
      var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      rl.question('Do you want to deploy? (Y/n)', function(answer) {
        rl.close();
        if (answer.toLowerCase() === 'n') {
          done(false);
        } else {
          done();
        }
      });
  });         
  
  grunt.registerTask('stagelocal', Help.staging, ['shell:vagrant']);
  grunt.registerTask('staging', Help.staging, ['checkProvision', 'shell:staging']);
  grunt.registerTask('deploy', Help.deploy, ['checkDeployment', 'shell:deploy']);
  
  grunt.registerTask('postinstall', Help.postinstall, 'shell:postinstall');
  
  // server dev environment with browsersync
//  grunt.registerTask('autosync', Help.autosync,
//    ['babel:dev', 'preprocess:html', 'ngtemplates:dev', 'concat:dev', 'ngAnnotate:dev', 'uglify:dev', 
//     'bower_concat:dev', 'wiredep:dev', 'copy:devCssImages', 
//     'copy:devImages', 'cssmin:dependencies', 'cssmin:dev', 'concurrent:auto']);
  
  // server dev environment no auto refresh
  grunt.registerTask('serve', Help.serve,
    ['babel:dev', 'preprocess:html', 'ngtemplates:dev', 'concat:dev', 'ngAnnotate:dev', 'uglify:dev', 
     'bower_concat:dev', 'wiredep:dev', 'copy:devCssImages', 'copy:devFonts',
     'copy:devImages', 'cssmin:dependencies', 'cssmin:dev', 'copy:devAssets', 'concurrent:dev']);

  grunt.registerTask('ionic', Help.ionic,
    ['babel:dev', 'preprocess:html', 'preprocess:ionic', 'ngtemplates:dev', 'concat:dev', 'ngAnnotate:dev', 'uglify:dev', 
     'bower_concat:dev', 'wiredep:dev', 'copy:devCssImages', 'copy:devFonts',
     'copy:devImages', 'cssmin:dependencies', 'cssmin:dev', 'copy:devAssets', 'concurrent:dev']);
    
  // runs server side specs and UI specs
  grunt.registerTask('spec', Help.spec,
    ['preprocess:html', 'jshint', 'jasmine_node', 
     'ngtemplates:specs', 'wiredep:test', 'karma:unit']);

  // grunt build
  // builds deployment assets
  // 1) Builds Babel ES6
  // 2) Preprocess Angular HTML
  // 3) Build Angular templates
  // 4) Copy images
  // 5) Concat App
  // 6) Concat Bower
  // 7) Copy Views
  // 8) Copy UI App
  // 9) Annotate app.js
  // 10) Uglify app.js to app.min.js
  // 11) Minifies CSS
  // 12) Zip
  grunt.registerTask('build', Help.build,
    ['babel:build', 'preprocess:html', 'ngtemplates:build', 'copy:buildImages', 'copy:buildCssImages', 'copy:buildFonts', 'bower_concat:build', 'copy:copyViews', 'copy:buildFrontEnd',
     'concat:build', 'ngAnnotate:build', 'uglify:build', 'uglify:buildDependencies', 
     'cssmin:build', 'cssmin:buildDependencies', 'copy:buildAssets', 'compress:build']);

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