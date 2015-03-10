
module.exports = {
  dev: {
    options: {
      'web-port': '<%= nodeInspector.webPort %>',
      'debug-port': '<%= nodeInspector.debugPort %>',
      'save-live-edit': '<%= nodeInspector.saveLiveEdit || false %>',
      'hidden': ['node_modules']
    }
  }
};