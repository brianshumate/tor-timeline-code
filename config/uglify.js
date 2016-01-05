module.exports = {
  filter: ['js/**/*.js'],
  removeOriginal: true,
  sourceMap: true,
  order: ['js/vendor/jquery-2.1.4.js',
    'js/vendor/foundation.js',
    'js/vendor/timeline.js',
    'js/app.js'],
  concat: 'js/main.min.js'
}
