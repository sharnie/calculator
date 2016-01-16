var gulp = require('gulp');
var sass = require('gulp-sass');
var input = './assets/stylesheets/sass/*.scss';
var output = './assets/stylesheets/css';

gulp.task('express', function() {
    var express = require('express');
    var app = express();
    app.use(express.static(__dirname));
    app.listen(4000, '0.0.0.0');
    console.log('Listening on: http://localhost:4000');
});

gulp.task('sass', function() {
    gulp.src(input)
        .pipe(sass())
        .pipe(gulp.dest(output));
});


gulp.task('default', ['express'], function() {
    gulp.watch(input, ['sass']);
});
