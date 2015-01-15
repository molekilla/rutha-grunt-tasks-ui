module.exports = {
  jsdoc : {
    dist : {
        src: ['<%= cwd %>/src/**/*.js'], 
        options: {
            destination: '<%= cwd %>/docs',
            template : "node_modules/grunt-jsdoc/node_modules/ink-docstrap/template",
            configure : "node_modules/grunt-jsdoc/node_modules/ink-docstrap/template/jsdoc.conf.json"
        }
    }
  }
}