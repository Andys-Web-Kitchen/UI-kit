'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-minify-css');
const concat = require('gulp-concat');

gulp.task('sass', () => (
    gulp.src('./src/ui-kit.scss')
        .pipe(concat('dist.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/'))
));