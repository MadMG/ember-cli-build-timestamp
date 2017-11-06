/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-build-info',

  /**
   * Expose the data on the APP object.
   */
  config (env, config) {
    config.APP.BUILD_TIMESTAMP = new Date();
  }
};
