'use strict';

module.exports = function (grunt) {

  var gruntConfig = require('./gruntconfig');

  gruntConfig.tasks.forEach(grunt.loadNpmTasks);
  grunt.initConfig(gruntConfig);

  /**
   * Checks whether or not a task has run yet in the current grunt runtime.
   *
   * @param task {String} The name of the task to check.
   *
   * @return True if the task has not yet run, false if the task has already
   *         run in this grunt runtime.
   */
  var taskNotRun = function (task) {
    try {
      grunt.task.requires(task);
      return false; // Task has already run
    } catch (e) {
      return true; // Task has not yet run
    }
  };

  /**
   * Creates a task function that executes a configurable list of tasks that
   * have not yet run in the current grunt runtime.
   *
   * @param tasks {Array} An array of task names to potentially run.
   */
  var taskList = function (tasks) {
    return function () {
      var t = tasks.filter(taskNotRun);
      grunt.task.run(t);
    };
  };

  // creates distributable version of library
  grunt.registerTask('build', taskList([
    'dev',
    'cssmin',
    'uglify'
  ]));

  // default task useful during development
  grunt.registerTask('default', taskList([
    'dev',
    'connect:dev',
    'test',
    'watch'
  ]));

  // builds development version of library
  grunt.registerTask('dev', taskList([
    'clean',
    'browserify',
    'copy'
  ]));

  // starts distribution server and preview
  grunt.registerTask('dist', taskList([
    'build',
    'connect:dist'
  ]));

  // runs tests against development version of library
  grunt.registerTask('test', taskList([
    'dev',
    'connect:test',
    'mocha_phantomjs'
  ]));
};
