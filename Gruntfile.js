module.exports = function(grunt) {
    var path = require('path');
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt'), //path to task.js files, defaults to grunt dir
        init: true, //auto grunt.initConfig
        data: { //data passed into config.  Can use with <%= test %>
            nodeInspector: {
                webPort: 8082,
                debugPort: 5859
            },
            nodemon: {
                args: ['--debug']
            },
            ngTemplates: {
                moduleNamespace: 'rutha.templates'
            },
            wiredep: {
                src: ['views/**/*.html'],
                options: {
                    cwd: process.cwd()
                }
            },
            cwd: process.cwd()
        },
        jitGrunt: {
            protractor: 'grunt-protractor-runner',
            ngAnnotate: 'grunt-ng-annotate',
            ngtemplates: 'grunt-angular-templates',
            instrument: 'grunt-istanbul',
            storeCoverage: 'grunt-istanbul',
            makeReport: 'grunt-istanbul',
            'validate-package': 'grunt-nsp-package'
        }
    });

    // server dev environment with browsersync
    grunt.registerTask('autosync', ['ngtemplates:dev', 'concat:dev', 'ngAnnotate', 'uglify:dev', 'wiredep', 'concurrent:auto']);
    
    // server dev environment no auto refresh
    grunt.registerTask('serve', ['ngtemplates:dev', 'concat:dev', 'ngAnnotate', 'uglify:dev', 'wiredep', 'concurrent:dev']);
      
    // runs server side specs and UI specs
    grunt.registerTask('spec', ['jshint', 'jasmine_node', 'karma:unit']);

    // builds deployment assets
    grunt.registerTask('build', ['ngtemplates:build', 'concat:dev', 'ngAnnotate', 'uglify:build', 'cssmin', 'wiredep']);

    // runs functional tests
    grunt.registerTask('test', ['concurrent:test']);

    // verfies javascript using jshint
    grunt.registerTask('jshinting', ['jshint']);

    // verifies security
    grunt.registerTask('auditpkg', ['validate-package']);
};