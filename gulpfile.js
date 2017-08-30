const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');

// Static Server + watching /public/ files
gulp.task('serve', ['sass-dev'], function() {

  browserSync.init({
    server: "./public"
  });

  gulp.watch("public/sass/**/*.scss", ['sass-dev']);
  gulp.watch("public/js/**/*.js").on('change', browserSync.reload);
  gulp.watch("public/**/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS
gulp.task('sass', function() {
  return gulp.src("public/sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("public/css"))
});
// Compile sass into CSS & auto-inject into browsers
// DEV ENV/USE ONLY
gulp.task('sass-dev', function() {
  return gulp.src("public/sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("public/css"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
gulp.task('build', ['sass']);