const gulp = require('gulp')
const browserify = require('gulp-browserify')
const notify = require('gulp-notify')
const connect = require('gulp-connect')
const uglify = require('gulp-uglify')

const BROWSERIFY_ENTRY_POINT = ['./src/Application.js']
const BUILD_DEST = './dist'

function logError (error) {
  var errorString = error.toString()
  notify.onError({
    title: 'Build Error',
    message: errorString
  })(error)
  console.log(errorString)
  this.emit('end')
}

gulp.task('buildMin', function () {
  return gulp.src(BROWSERIFY_ENTRY_POINT)
    .pipe(browserify({
      global: true,
      debug: true
    }))
    .on('error', logError)
    .pipe(uglify())
    .on('error', logError)
    .pipe(gulp.dest(BUILD_DEST))
    .pipe(connect.reload())
})

gulp.task('build', function () {
  return gulp.src(BROWSERIFY_ENTRY_POINT)
    .pipe(browserify({
      global: true,
      debug: true
    }))
    .on('error', logError)
    .pipe(gulp.dest(BUILD_DEST))
    .pipe(connect.reload())
})
