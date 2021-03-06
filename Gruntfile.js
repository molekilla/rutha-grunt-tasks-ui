var Help = {
    serve: 'Serves frontend service with no auto reload',
    'serve:ionic': 'Serves frontend service with no auto reload for ionic',
    spec: 'Runs jshint and server side / Karma - Jasmine specs',
    test: 'Runs E2E/Functional tests (Angular)',
    build: 'Prepares UI assets for release',
    jshinting: 'Verifies javascript using jshint',
    auditpkg: 'Verifies modules for any security issues',
    postinstall: 'Postinstall grunt shell script',
    staging: 'Provisions a local staging VM',
    deploy: 'Provisions a new deployment or updates existing'
};

var tasks = function (grunt, options) {
    // https://github.com/gruntjs/grunt/issues/992

    grunt.registerTask('checkProvision', function () {
        // if (grunt.option('ack') !== true) { return true; }
        var done = this.async();
        var readline = require('readline');
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('Do you want to provision staging? (Y/n)', function (answer) {
            rl.close();
            if (answer.toLowerCase() === 'n') {
                done(false);
            } else {
                done();
            }
        });
    });

    grunt.registerTask('checkDeployment', function () {
        // if (grunt.option('ack') !== true) { return true; }
        var done = this.async();
        var readline = require('readline');
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('Do you want to deploy? (Y/n)', function (answer) {
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

    // server dev environment no auto refresh for ionic
    grunt.registerTask('ionic', Help.serve, ['preprocess:html', 'ngtemplates:dev', 'concat:dev', 'ngAnnotate:dev', 'uglify:devIonic',
     'bower_concat:dev', 'wiredep:dev', 'copy:devCssImages', 'copy:devFonts',
     'copy:devImages', 'copy:ionicIndex', 'cssmin:dependencies', 'sass:ionic', 'copy:devAssets', 'concurrent:dev']);


        // Default task.
        // runs server side specs and UI specs
        grunt.registerTask('spec', Help.spec, ['preprocess:html', 'jshint', 'shell:jasmine',
     'ngtemplates:specs', 'wiredep:test', 'karma:unit']);
        // server dev environment no auto refresh
        grunt.registerTask('serve', Help.serve, ['preprocess:html', 'ngtemplates:dev', 'concat:dev', 'ngAnnotate:dev', 'uglify:dev',
     'bower_concat:dev', 'copy:devCssImages', 'copy:devFonts',
     'copy:devImages', 'cssmin:dependencies', 'cssmin:dev', 'copy:devAssets', 'concurrent:dev']);




    // grunt build
    // builds deployment assets
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
    grunt.registerTask('build', Help.build, ['preprocess:html', 'ngtemplates:build', 'copy:buildImages', 'copy:buildCssImages', 'copy:buildFonts', 'bower_concat:build', 'copy:copyViews', 'copy:buildFrontEnd',
     'concat:build', 'ngAnnotate:build', 'uglify:build', 'uglify:buildDependencies',
     'cssmin:build', 'cssmin:buildDependencies', 'copy:buildAssets', 'compress:build']);

    // runs functional tests
    grunt.registerTask('test', Help.test, ['concurrent:test']);

    // verfies javascript using jshint
    grunt.registerTask('jshinting', Help.jshinting, ['jshint']);

    // verifies security
    grunt.registerTask('auditpkg', Help.auditpkg, ['validate-package']);
};

function Loader(grunt, config) {
    return {
        help: Help,
        registerTasks: function () {
            return tasks(grunt, config);
        }
    };
}


module.exports = Loader;