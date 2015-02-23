rutha-grunt-tasks-ui
=========================

Grunt tasks used by rutha UI

### Changelog

#### 0.4.4

* Added task `grunt-babel` for `grunt autosync` pipeline

#### 0.4.3

* Added task `grunt-babel` for UI frontend hapi. Any *.es6 will transpile to ES5 / *.js
* Updated  `grunt staging` and `grunt deploy` tasks with Ansible coloring


#### 0.4.2

* Missing task `preprocess:html` in watch

#### 0.4.1

* Removing ugly warning logs

#### 0.4.0

* Added `grunt stagelocal`, `grunt staging` and `grunt deploy` tasks. Requires Vagrant, Ansible and rutha_deploy.

#### 0.3.6


* Removed releaseInclude.css and releaseInclude.js. Please include files in src/css and src/js.
* Added `grunt-preprocess` for Angular HTML files (any HTML in src/app)
