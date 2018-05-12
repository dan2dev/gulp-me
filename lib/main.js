"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rename = require("gulp-rename");
const browserify = require("gulp-browserify");
const minify = require("gulp-minify");
// const buffer = require("vinyl-buffer");
const bro = require("gulp-bro");
const babelify = require("babelify");
const path = require("path");
// typescript
const sourcemaps = require("gulp-sourcemaps");
const gulp_typescript_1 = require("gulp-typescript");
const merge = require("merge2");
const tsProject = gulp_typescript_1.createProject("tsconfig.json");
// browser sync
const browser_1 = require("./tasks/browser");
var GulpMe;
(function (GulpMe) {
    GulpMe.Browser = browser_1.Browser;
    let env = "both";
    function setEnv(environment) {
        env = environment;
    }
    GulpMe.setEnv = setEnv;
    function getEnv() {
        return env;
    }
    GulpMe.getEnv = getEnv;
    function inject(gulpInstance) {
        exports.gulp = gulpInstance;
        return this;
    }
    GulpMe.inject = inject;
    function tsc(dest = "./lib", types = "./@types") {
        return () => {
            const tsResult = tsProject.src()
                .pipe(sourcemaps.init())
                .pipe(tsProject());
            return merge([
                tsResult.js.pipe(sourcemaps.write()).pipe(exports.gulp.dest("./lib")),
                tsResult.dts.pipe(exports.gulp.dest("./@types"))
            ]);
        };
    }
    GulpMe.tsc = tsc;
    function jsBuild(entry, outputName) {
        const dest = "./";
        return () => {
            const options = {
                ext: {
                    min: ".min.js",
                    ignoreFiles: [".combo.js", ".min.js"],
                },
            };
            return exports.gulp.src(entry)
                .pipe(browserify({
                insertGlobals: false,
                sourceMapsAbsolute: true,
                presets: ["@babel/preset-env", "@babel/preset-react"],
            }))
                .pipe(rename(outputName))
                .pipe(exports.gulp.dest(dest))
                .pipe(minify(options))
                .pipe(exports.gulp.dest(dest));
        };
    }
    GulpMe.jsBuild = jsBuild;
    function copy(src, dest) {
        return () => {
            exports.gulp.src(src).pipe(exports.gulp.dest(dest));
        };
    }
    GulpMe.copy = copy;
})(GulpMe = exports.GulpMe || (exports.GulpMe = {}));
exports.default = GulpMe;
// // const g: any = require("gulp");
// let o: any = {};
// let gulp2: any;
// o.injectMe = (gulpInstance: any) => {
//   gulp = gulpInstance;
//   return o;
// };
// // gulp.fs = require("fs");
// // const fs: any = require("fs");
// o.packageFile = JSON.parse(fs.readFileSync("./package.json"));
// o.gulpCopy = require("gulp-copy");
// o.browserify = require("gulp-browserify");
// o.babel = require("gulp-babel");
// o.rename = require("gulp-rename");
// o.uglify = require("gulp-uglify");
// o.minify = require("gulp-minify");
// o.runSequence = require("run-sequence");
// o.del = require("del");
// o.merge = require("merge2");
// // typescript
// o.ts = require("gulp-typescript");
// if (true || !fs.existsSync("tsconfig.json")) {
//   fs.writeFileSync("tsconfig.json", tsConfigString(), "utf8", (err: any) => {
//     if (err) { return console.log(err); }
//     console.log("generate tsconfig.json");
//   });
// }
// o.tsProject = o.ts.createProject("tsconfig.json");
// // sass
// o.sassImport = require("gulp-sass-import");
// o.sass = require("gulp-sass");
// o.sourcemaps = require("gulp-sourcemaps");
// o.cleanCSS = require("gulp-clean-css");
// // browserSync
// o.browserSync = require("browser-sync").create();
// o.reset = () => {
//   return gulp.del([
//     "@types/**/*",
//     "dist/**/*",
//     "lib/**/*",
//     "yarn.lock",
//     "!dist/do-not-delete-this.json"
//   ]);
// };
// o.tsc = (dest: string = "./lib", types: string = "./@types") => {
//   return () => {
//     const tsResult: any = o.tsProject.src()
//       .pipe(o.sourcemaps.init())
//       .pipe(o.tsProject());
//     return o.merge([
//       tsResult.js.pipe(o.sourcemaps.write()).pipe(gulp.dest("./lib")),
//       tsResult.dts.pipe(gulp.dest("./@types"))]
//     );
//   };
// };
// o.clone = (sourceFiles: string[] | string, destination: string) => {
//   return () => {
//     gulp.src(sourceFiles)
//       .pipe(gulp.dest(destination));
//   };
// };
// module.exports = o;
//# sourceMappingURL=main.js.map