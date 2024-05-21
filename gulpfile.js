const gulp = require("gulp");
const zip = require("gulp-zip");
const cfg = require("./public/config.json");

console.log("Build package ", `${cfg.name.ru}-${cfg.version}.zip`);

exports.default = () =>
    gulp
        .src("build/**")
        .pipe(zip(`${cfg.name.ru}-${cfg.version}.zip`))
        .pipe(gulp.dest("dist"));
