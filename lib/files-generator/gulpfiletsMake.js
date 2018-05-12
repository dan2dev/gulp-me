"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function gulpfiletsMake() {
    return `import * as gulp from "gulp";
import { GulpMe } from "gulp-me";
GulpMe.inject(gulp);

gulp.task("ts", GulpMe.tsc());
  `;
}
exports.gulpfiletsMake = gulpfiletsMake;
//# sourceMappingURL=gulpfiletsMake.js.map