/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-build-info',

  /**
   * Collect Build Info data
   */
  included: function (/*app, parentAddon*/) {
    this.timestamp = new Date();
  },

  /**
   * Expose the data on the APP object.
   */
  config: function (env, config) {
    config.APP.BUILD_TIMESTAMP = this.timestamp;
  }
};
