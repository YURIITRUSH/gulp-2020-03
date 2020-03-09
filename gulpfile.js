const gulp = require('gulp');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

const paths = {
  'root':'./dist',
  'html':{
    'watch':[
    './source/views/**/*.pug'
    ],
    'source':'./source/views/pages/*.pug',
    'dest':'./dist'
  }
}

function builtHTML() {
  return gulp.src(paths.html.source)
    .pipe(pug({'pretty':true}))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream())
}

function watch() {
  browserSync.init({
    server:{
      baseDir:paths.root
    }
  })
  gulp.watch(paths.html.watch, builtHTML)
}

exports.templates = builtHTML
exports.watch = watch