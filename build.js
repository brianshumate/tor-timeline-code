// Dependencies
var autoprefixer = require('metalsmith-autoprefixer')
var chalk = require('chalk')
var cleanCss = require('metalsmith-clean-css')
var duo = require('metalsmith-duo')
var fingerprint = require('metalsmith-fingerprint')
var imagemin = require('metalsmith-imagemin')
var layouts = require('metalsmith-layouts')
var markdown = require('metalsmith-markdown')
var metalsmith = require('metalsmith')
var postcss = require('metalsmith-postcss')
var uglify = require('metalsmith-uglify')
var uncss = require('metalsmith-uncss')
// Site build
metalsmith(__dirname)
  .metadata(require('./config/metadata'))
  // Define directories
  .source('./src')
  .destination('./build')
  // Build pages
  .use(markdown(require('./config/markdown')))
  .use(layouts(require('./config/layouts')))
  .use(uglify(require('./config/uglify')))
  // process CSS
  .use(duo({entry: ['css/app.css']}))
  .use(autoprefixer(require('./config/supportedBrowsers')))
  .use(postcss(require('./config/cssPlugins')))
  .use(uncss(require('./config/uncss')))
  .use(cleanCss({files: ['css/app.css']}))
  .use(fingerprint({pattern: ['css/app.css']}))
  .use(imagemin(require('./config/images')))
  .build(function (err) {
    if (err) {
      console.error(chalk.red(err))
    }
  })
