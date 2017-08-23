const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');

// Static Server + watching /public/ files
gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: "./public"
  });

  gulp.watch("public/assets/sass/**/*.scss", ['sass']);
  gulp.watch("public/assets/js/**/*.js").on('change', browserSync.reload);
  gulp.watch("public/**/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("public/assets/sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("public/assets/css"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
gulp.task('build', ['sass']);