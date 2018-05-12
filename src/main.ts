import { Gulp } from "gulp";
import { get } from "http";
// util
import { default as fs } from "fs-extra";
import * as rename from "gulp-rename";
const browserify = require("gulp-browserify");
const minify = require("gulp-minify");
import * as uglify from "gulp-uglify";
// const buffer = require("vinyl-buffer");
const bro = require("gulp-bro");
const babelify = require("babelify");
const path = require("path");
// typescript
import * as sourcemaps from "gulp-sourcemaps";
import { createProject, Project } from "gulp-typescript";
import * as merge from "merge2";
const tsProject: Project = createProject("tsconfig.json");
// browser sync
import { Browser as BrowserImport } from "./tasks/browser";

// essentials ---------
export let gulp: Gulp;
export namespace GulpMe {
  export const Browser = BrowserImport;
  let env: "dev" | "prod" | "both" = "both";
  export function setEnv(environment: "dev" | "prod" | "both") {
    env = environment;
  }
  export function getEnv() {
    return env;
  }
  export function inject(gulpInstance: Gulp): void {
    gulp = gulpInstance;
    return this;
  }
  export function tsc(dest: string = "./lib", types: string = "./@types"): any {
    return () => {
      const tsResult: any = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject());
      return merge([
        tsResult.js.pipe(sourcemaps.write()).pipe(gulp.dest("./lib")),
        tsResult.dts.pipe(gulp.dest("./@types"))],
      );
    };
  }
  export function jsBuild(entry: string, outputName: string): any {
    const dest: string = "./";
    return () => {
      const options = {
        ext: {
          min: ".min.js",
          ignoreFiles: [".combo.js", ".min.js"],
        },
      };
      return gulp.src(entry)
        .pipe(browserify({
          insertGlobals: false,
          sourceMapsAbsolute: true,
          presets: ["@babel/preset-env", "@babel/preset-react"],
        }))
        .pipe(rename(outputName))
        .pipe(gulp.dest(dest))
        .pipe(minify(options))
        .pipe(gulp.dest(dest));
    };
  }
  export function copy(src: string | string[], dest: string) {
    return () => {
      gulp.src(src).pipe(gulp.dest(dest));
    };
  }
}
export default GulpMe;

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
