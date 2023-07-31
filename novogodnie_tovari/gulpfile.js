const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

const path = require('./gulp/config/path.js');
const app = require('./gulp/config/app.js');

//tasks
const clear = require('./gulp/task/clear.js');
const html = require('./gulp/task/html.js');
const css = require('./gulp/task/css.js');
const scss = require('./gulp/task/scss.js');
const js = require('./gulp/task/js.js');
const img = require('./gulp/task/img.js');
const font = require('./gulp/task/font.js');


function server() {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
}

function watcher() {
    watch(path.html.watch, html).on('all', browserSync.reload);
    watch(path.scss.watch, scss).on('all', browserSync.reload);
    watch(path.js.watch, js).on('all', browserSync.reload)
    watch(path.img.watch, img).on('all', browserSync.reload)
    watch(path.font.watch, font).on('all', browserSync.reload)
}

module.exports.html = html;
module.exports.img = img;
module.exports.scss = scss;
module.exports.js = js;
module.exports.font = font;

const build = series(
    clear, parallel(html, scss, js, img, font)
);

const dev = series(
    build,
    parallel(watcher, server)
)


exports.default = app.isProd ? build : dev;