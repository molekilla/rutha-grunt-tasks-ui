module.exports = function (grunt, options) {
  var scripts = {
    postinstall: {
      command: 'node node_modules/protractor/bin/webdriver-manager update'
    }
  };
  
  if (process.env.NODE_ENV === 'production') {
    // do nothing
    scripts['postinstall'] = {
      command: 'pwd'
    };
  }
  
  return scripts;
};