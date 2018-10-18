const gulp        = require('gulp');
const sass        = require('gulp-sass');

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

gulp.task('build', ['sass']);
