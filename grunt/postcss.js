'use strict';

module.exports = {

  core: {
    options: {
      processors: [
        require('autoprefixer')(),
      ],
    },
    src: '<%= paths.temp %>/css/main.css',
  },
  'core-min': {
    options: {
      processors: [
        require('cssnano')({
          autoprefixer: false,
          mergeRules: false,
          zindex: false,
        }),
      ],
    },
    src: '<%= paths.temp %>/css/main.css',
    dest: '<%= paths.dist %>/css/main.min.css',
  },

};
