rutha-grunt-tasks-ui
=========================

Grunt tasks used by rutha UI

### Changelog

#### 1.0.2

* Fixes for Ionic (ngtemplates)

#### 1.0.1

* Fixes for Ionic

#### 1.0.0

* Added support for devEnvironment.distFolder variable
* Added support for Ionic 1.0.0 (grunt ionic)

#### 0.5.0

* Added fixed concurrent limits

#### 0.4.9

* Added support for packaging raw (no min / uglify) assets 

#### 0.4.8

* Added support for packaging fonts

#### 0.4.6

* Added nodeInspector.saveLiveEdit for grunt-node-inspector 0.1.6

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
