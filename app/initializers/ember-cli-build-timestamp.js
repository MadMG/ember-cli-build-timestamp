export default {
  name: 'buildTimestamp',

  initialize (application) {
    const timestamp = application.BUILD_TIMESTAMP;
    const key = 'buildTimestamp';

    application.register('buildTimestamp:main', timestamp, {instantiate: false, singleton: true});
    application.inject('route', key, 'buildTimestamp:main');
    application.inject('controller', key, 'buildTimestamp:main');
    application.inject('service', key, 'buildTimestamp:main');
  }
};
