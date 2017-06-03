const gulp = require('gulp'),
      sass = require('gulp-sass'),
      jade = require('gulp-jade'),
      rename = require('gulp-rename'),
      uglify = require('gulp-uglify'),
      babelify = require('babelify'),
      browserify = require('browserify'),
      sourcemaps = require('gulp-sourcemaps'),
      source = require('vinyl-source-stream'),
      buffer = require('vinyl-buffer'),
      plumber = require('gulp-plumber'),
      notify = require('gulp-notify');

var browserSync = require('browser-sync').create();

const tasks = [
  'jade',
  'sass',
  'scripts',
  'fonts',
  'images'
];

gulp.task('jade', function() {
  return gulp.src([
    'src/jade/4-pages/**/*.jade',
    'src/jade/index.jade'
  ]).pipe(plumber({errorHandler: notify.onError({
    message: "File: <%= error.details %> \nError: <%= error.message %>",
    title: "Error found in Jade file. (See console for log.)"
  })}))
    .pipe(jade({
      pretty: true
    }).on('error', console.error.bind(console)))
    .pipe(gulp.dest('dist/'))
});

gulp.task('jade-watch', ['jade'], function(){
  browserSync.reload();
});

gulp.task('sass', function() {
  return gulp.src('src/sass/app.sass')
      .pipe(plumber({errorHandler: notify.onError({
        message: "File: <%= error.details %> \nError: <%= error.message %>",
        title: "Error found in Sass file. (See console for log.)"
      })}))
      .pipe(sass({
          outputStyle: 'compressed'
      }).on('error', sass.logError))
      .pipe(rename({
        suffix: ".min",
      }))
      .pipe(gulp.dest('dist/css/'))
      .pipe(browserSync.stream())
});

gulp.task('scripts', function(){
  return browserify({entries: './src/js/app.js', debug: true})
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .on("error", notify.onError(function (error) {
          console.log('Error found in JS File');
          console.error("Location: " + error.filename);
          console.error("Line: " + error.loc.line);
          console.error("\nError: " + error.codeFrame + '\n')
          return {
            title: "Error in JS file." + error.filename,
            message: "Line: " + error.loc.line
          }
        }))
        .pipe(source('app.min.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream())
});

gulp.task('fonts', function(){
  gulp.src('./src/fonts/**')
      .pipe(gulp.dest('./dist/fonts/'))
});

gulp.task('images', function(){
  gulp.src('./src/img/**/*.{png,jpg,jpeg}')
      .pipe(gulp.dest('./dist/img/'))
});

gulp.task('serve', ['jade', 'sass', 'scripts'], function() {

    browserSync.init({
        server: "dist",
    });

    gulp.watch("src/sass/**/*.sass", ['sass']);
    gulp.watch("src/jade/**/*.jade", ['jade-watch']);
    gulp.watch("src/js/**/*.js", ['scripts']);

});

gulp.task('default', ['serve']);
