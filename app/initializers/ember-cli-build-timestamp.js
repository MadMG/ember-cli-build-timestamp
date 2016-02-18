export default {
  name: 'buildTimestamp',

  initialize: function (application) {
    var timestamp = application.BUILD_TIMESTAMP;
    var key = 'buildTimestamp';

    application.register('buildTimestamp:main', timestamp, {instantiate: false, singleton: true});
    application.inject('route', key, 'buildTimestamp:main');
    application.inject('controller', key, 'buildTimestamp:main');
    application.inject('service', key, 'buildTimestamp:main');
  }
};
