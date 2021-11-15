const gulp = require('gulp'),
      sass = require('gulp-sass')(require('sass')),
      rename = require('gulp-rename'),
      browserSync = require('browser-sync'),
      autoprefixer = require('gulp-autoprefixer'),
      uglify = require('gulp-uglify');

gulp.task('sass', () => {
  return gulp.src('app/scss/**/*.scss')
         .pipe(sass().on('error', sass.logError))
         .pipe(sass({outputStyle: 'compressed'}))
         .pipe(rename({suffix: '.min'}))
         .pipe(autoprefixer({overrideBrowserslist: ['last 8 version']}))
         .pipe(gulp.dest('dist/css'))
         .pipe(browserSync.reload({ stream: true }));
      });
      

gulp.task('js', () => {
  return gulp.src('app/js/**/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('html', () => {
  return gulp.src('app/*.html')
         .pipe(gulp.dest('dist/'))
         .pipe(browserSync.reload({ stream: true }));
}); 

gulp.task('images', () => {
  return gulp.src('app/images/**.*')
         .pipe(gulp.dest('dist/images'))
         .pipe(browserSync.reload({ stream: true }));
}); 

gulp.task('fonts', () => {
  return gulp.src('app/fonts/**.*')
         .pipe(gulp.dest('dist/fonts'))
         .pipe(browserSync.reload({ stream: true }))
}); 

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
        baseDir: 'dist/'
    },
    port: 9000,
    host: 'localhost',
    notify: false
})
})

gulp.task('watch', () => {
  gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'));
  gulp.watch('app/*.html', gulp.parallel('html'));
  gulp.watch('app/js/*.js', gulp.parallel('js'));
  gulp.watch('app/images', gulp.parallel('images'));
  gulp.watch('app/fonts', gulp.parallel('fonts'));
})

gulp.task('default', gulp.parallel('sass', 'watch', 'browser-sync', 'html', 'js', 'images', 'fonts'));