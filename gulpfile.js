const gulp = require('gulp'),
      sass = require('gulp-sass'),
      jade = require('gulp-jade'),
      rename = require('gulp-rename'),
      livereload = require('gulp-livereload'),
      uglify = require('gulp-uglify'),
      babelify = require('babelify'),
      browserify = require('browserify'),
      source = require('vinyl-source-stream');
      buffer = require('vinyl-buffer');

const tasks = [
  'jade',
  'sass',
  'scripts',
  'fonts',
  'images',
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
  browserify({
    entries: 'src/js/app.js',
    debug: false
  })
  .transform('babelify', {
		presets: ['es2015']
	})
  .bundle()
  .on('error', console.log)
  .pipe(source('app.min.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js'))
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
  livereload.listen({}, function () {
      console.log('Live Reload server ... OK');
  });
  gulp.watch('src/**', tasks);
});

gulp.task('default', tasks);
