var gulp = require('gulp')
  , gulpReact = require('gulp-react')
  , source = require('vinyl-source-stream')
  , browserify = require('browserify');


gulp.task('jsx', function() {
    return gulp.src('src/**/*.jsx').pipe(gulpReact()).pipe(gulp.dest('public'));
});

gulp.task('jade', function() {
    return gulp.src('src/views/**/*.jade').pipe(gulp.dest('public/views'));
});

gulp.task('build', ['jsx', 'jade'], function() {
    return browserify('./public/client/entry.js').bundle().pipe(source('app.js')).pipe(gulp.dest('public/js'));
});