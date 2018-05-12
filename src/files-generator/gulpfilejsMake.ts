export function gulpfilejsMake(): string {
  return `// use gulpfile
// don't change this.
eval(require("typescript").transpile(require("fs").readFileSync("./gulpfile.ts").toString()));
`;
}
