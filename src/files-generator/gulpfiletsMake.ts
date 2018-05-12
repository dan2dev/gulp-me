export function gulpfiletsMake(): string {
  return `import * as gulp from "gulp";
import { GulpMe } from "gulp-me";
GulpMe.inject(gulp);

gulp.task("ts", GulpMe.tsc());
  `;
}
