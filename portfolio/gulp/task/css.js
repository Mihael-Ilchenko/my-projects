const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const concat = require('gulp-concat');
const cssimport = require('gulp-cssimport');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const groupCssMedia = require('gulp-group-css-media-queries');
const webpCss = require('gulp-webp-css')

const path = require('../config/path.js');
const app = require('../config/app.js');


function css() {
    return src(path.css.src, { sourcemaps: app.isDev })
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'CSS',
                message: error.message
            }))
        }))
        .pipe(concat('main.css'))
        .pipe(cssimport())
        .pipe(webpCss())
        .pipe(shorthand()) //?
        .pipe(groupCssMedia())
        .pipe(autoprefixer())

    .pipe(size({ title: 'main.css' }))
        .pipe(dest(path.css.dest, { sourcemaps: app.isDev }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(csso())
        .pipe(size({ title: 'main.min.css' }))
        .pipe(dest(path.css.dest, { sourcemaps: app.isDev }))

}

module.exports = css;