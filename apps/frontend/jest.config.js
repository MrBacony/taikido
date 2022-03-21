module.exports = {
  name: 'frontend',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/frontend',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
