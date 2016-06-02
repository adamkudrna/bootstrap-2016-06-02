'use strict';

module.exports = {

  'build-css': [
    'less:core',
    'postcss:core',
    'postcss:core-min',
  ],

  build: [
    'clean:temp',
    'build-css',
    'copy',
  ],

  default: 'build',
};
