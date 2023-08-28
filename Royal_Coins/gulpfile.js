//latest           ----  подгрузка самой последней версии плагина  && "webp-converter": "2.2.3",
//npm run dev      ----  версия разработки
//npm run build    ----  версия prod
//npm run zip      ----  создать версию build в формате zip отд файлом
//npm run deploy   ----  залить на ftp заполнив данные в gulp/config/ftp.js

//Основной модуль
import gulp from "gulp";

//импорт путей
import { path } from "./gulp/config/path.js";

//импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

//значения в глобальную переменную app
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

//импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprite.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

//наблюдатель за изменениями в файлах
const watcher = () => {
  gulp.watch(path.watch.files, copy); //gulp.series(copy, ftp) сразу загружать изменения на сервер
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
};

export { svgSprive };
//последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

//основные задачи
const mainTasks = gulp.parallel(copy, html, scss, js, images); //*gulp.series(fonts,...)

//построения сценария выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

//экспорт сценариев
export { dev };
export { build };
export { deployZIP };
export { deployFTP };
//сценарий по умолчанию
gulp.task("default", dev);
