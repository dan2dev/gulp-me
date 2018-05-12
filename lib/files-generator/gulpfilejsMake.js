"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function gulpfilejsMake() {
    return `// use gulpfile
// don't change this.
eval(require("typescript").transpile(require("fs").readFileSync("./gulpfile.ts").toString()));
`;
}
exports.gulpfilejsMake = gulpfilejsMake;
//# sourceMappingURL=gulpfilejsMake.js.map