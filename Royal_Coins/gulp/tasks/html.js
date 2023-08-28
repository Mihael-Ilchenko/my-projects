import fileInclude from 'gulp-file-include'; //собираем html из частей
import webpHtmlNoSvg from 'gulp-webp-html-nosvg'; //обработка изображений но не svg
import versionNumber from 'gulp-version-number'; //добавить ключ на запрет кеширования в браузере

export const html = () => {
  return app.gulp.src(app.path.src.html)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'HTML',
      message: 'Error: <%= error.message %>'
    })
  )
)
  .pipe(fileInclude())                      //собираем html из частей
  .pipe(app.plugins.replace(/@img\//g, 'img/'))
  .pipe(
    app.plugins.if(
      app.isBuild,
      webpHtmlNoSvg()
    )
  )
  .pipe(
    app.plugins.if(
      app.isBuild,
      versionNumber({
        'value': '%DT%',
        'append': {
          'key': '_v',
          'cover': 0,
          'to': [
            'css',
            'js',
          ]
        },
        'output': {
          'file': 'gulp/version.json',
        }
    })
    )
   )
  .pipe(app.gulp.dest(app.path.build.html))
  .pipe(app.plugins.browsersync.stream());
}
