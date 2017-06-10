const gulp = require('gulp'),
      sass = require('gulp-sass'),
      pug = require('gulp-pug'),
      rename = require('gulp-rename'),
      uglify = require('gulp-uglify'),
      babelify = require('babelify'),
      browserify = require('browserify'),
      autoprefixer = require('gulp-autoprefixer'),
      sourcemaps = require('gulp-sourcemaps'),
      imagemin = require('gulp-imagemin'),
      source = require('vinyl-source-stream'),
      buffer = require('vinyl-buffer'),
      plumber = require('gulp-plumber'),
      todo = require('gulp-todo'),
      notify = require('gulp-notify');

var browserSync = require('browser-sync').create();

const tasks = [
  'jade',
  'sass',
  'scripts',
  'fonts',
  'images',
  'todo'
];

gulp.task('pug', function() {
  return gulp.src([
    'src/pug/4-pages/**/*.pug',
    'src/pug/index.pug'
  ]).pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(pug({
      pretty: true
    }).on('error', console.error.bind(console)))
    .pipe(gulp.dest('dist/'))
});

gulp.task('pug-watch', ['pug'], function(){
  browserSync.reload();
});

gulp.task('sass', function() {
  return gulp.src('src/sass/app.sass')
      .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
      .pipe(sass({
          outputStyle: 'compressed'
      }).on('error', sass.logError))
      .pipe(rename({
        suffix: ".min",
      }))
      .pipe(autoprefixer({
        browsers: ['> 1%', 'last 2 versions', 'IE 10', 'Firefox > 45', 'iOS 7'],
      }))
      .pipe(gulp.dest('dist/css/'))
      .pipe(browserSync.stream())
});

gulp.task('scripts', function(){
  return browserify({entries: './src/js/app.js', debug: true})
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .on('error',notify.onError(function (error) {
          return "Message to the notifier: " + error.message;
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
      .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({plugins: [{removeViewBox: true}]})
      ]))
      .pipe(gulp.dest('./dist/img/'))
      .pipe(browserSync.stream())
});

gulp.task('todo', function () {
    return gulp.src(['./src/js/**/*.js', './src/sass/**/*.sass', './src/pug/**/*.pug'])
        .pipe(todo({
          fileName: 'TODO.md'
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('serve', ['pug', 'sass', 'scripts', 'images', 'todo'], function() {

    browserSync.init({
        server: "dist",
    });

    gulp.watch("src/sass/**/*.sass", ['sass', 'todo']);
    gulp.watch("src/pug/**/*.pug", ['pug-watch', 'todo']);
    gulp.watch("src/js/**/*.js", ['scripts', 'todo']);

});

gulp.task('default', ['serve']);
