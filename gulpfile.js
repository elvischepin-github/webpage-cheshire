var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task(
  'serve',
  gulp.series(function (done) {
    browserSync.init({
      server: {
        baseDir: './',
      },
    });

    gulp.watch('scss/*.scss', gulp.series('sass'));
    gulp.watch('*.html').on('change', browserSync.reload);
    done();

    // Watches all my js!!!

    gulp.watch('./*.js').on('change', browserSync.reload);
  })
);

gulp.task(
  'sass',
  gulp.series(function (done) {
    return gulp
      .src('scss/style.scss')
      .pipe(
        sass({
          outputStyle: 'compressed',
        })
      )
      .pipe(
        autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false,
        })
      )
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.stream());
    done();
  })
);

gulp.task(
  'default',
  gulp.parallel('serve', function () {
    gulp.series('serve');
  })
);
