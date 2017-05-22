const gulp = require('gulp'),
      sass = require('gulp-sass'),
      babel = require('gulp-babel'),
      jade = require('gulp-jade'),
      rename = require('gulp-rename'),
      livereload = require('gulp-livereload'),
      uglify = require('gulp-uglify');

const tasks = [
  'jade',
  'sass',
  'scripts',
  'fonts',
  'images'
];

gulp.task('jade', function() {
  gulp.src([
    'src/jade/3-pages/**/*.jade', 
    'src/jade/index.jade'
  ]).pipe(jade({
      pretty: true
    }).on('error', console.error.bind(console)))
    .pipe(gulp.dest('dist/'))
    .pipe(livereload());
});

gulp.task('sass', function() {
  gulp.src('src/sass/app.sass')
      .pipe(sass({
          outputStyle: 'compressed'
      }).on('error', sass.logError))
      .pipe(rename({
        suffix: ".min",
      }))
      .pipe(gulp.dest('dist/css/'))
      .pipe(livereload());
});

gulp.task('scripts', function(){
  gulp.src('src/js/app.js')
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(uglify())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('dist/js/'))
      .pipe(livereload());
});

gulp.task('fonts', function(){
  gulp.src('./src/fonts/**')
      .pipe(gulp.dest('./dist/fonts/'))
});

gulp.task('images', function(){
  gulp.src('./src/img/**/*.{png,jpg,jpeg}')
      .pipe(gulp.dest('./dist/img/'))
      .pipe(livereload())
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/**', tasks);
});

gulp.task('default', tasks);
