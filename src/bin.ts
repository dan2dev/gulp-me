#! /usr/bin/env node
"use strict";
import { default as fs, writeFile } from "fs-extra";
import { execAsync, writeFileAsync } from "./util/main";
import { tsConfigString } from "./files-generator/anyfileMake";
import { tslintMake } from "./files-generator/tslintMake";
import { tsconfigMake } from "./files-generator/tsconfigMake";
import { gulpfilejsMake } from "./files-generator/gulpfilejsMake";
import { gulpfiletsMake } from "./files-generator/gulpfiletsMake";
import { swMake } from "./files-generator/swMake";
import * as args from "args";

interface IArgsParsed {
  t: string;
  type: string;
  r: boolean;
  reset: boolean;
}

(async function main() {
  args
    .option("type", "Type of the project (pwa,web,lib) ", "pwa")
    .option("reset", "Replace all files with new ones", "false");
  const flags = args.parse(process.argv) as IArgsParsed;
  const isReset: boolean = flags.reset;
  const isPwa: boolean = flags.type.toLowerCase() === "pwa";
  const isWeb: boolean = isPwa || flags.type.toLowerCase() === "web";
  const isLib: boolean = isPwa || flags.type.toLowerCase() === "lib";
  //
  // ─── INSTALL REQUIRED NPM MODULES ───────────────────────────────────────────────
  //
  console.log("install gulp: " + (await execAsync("yarn add gulp @types/gulp -D") ? "ok" : "-"));
  console.log("install gulp-me: " + (await execAsync("yarn add gulp-me -D") ? "ok" : "-"));
  console.log("install types: " + (await execAsync("yarn add @types/window-or-global @types/node") ? "ok" : "-"));
  console.log("install typescript: " + (await execAsync("yarn add typescript -D") ? "ok" : "-"));
  //
  // ─── CREATE DEFAULT FILES ───────────────────────────────────────────────────────
  //
  console.log("tsconfig.json: " + (await writeFileAsync("tsconfig.json", tsconfigMake()) ? "ok" : "-"));
  console.log("tslint.json: " + (await writeFileAsync("tslint.json", tslintMake()) ? "ok" : "-"));
  console.log("gulpfile.js: " + (await writeFileAsync("gulpfile.js", gulpfilejsMake(), true) ? "ok" : "-"));
  console.log("gulpfile.ts: " + (await writeFileAsync("gulpfile.ts", gulpfiletsMake()) ? "ok" : "-"));
  //
  // ─── PWA FILES ───────────────────────────────────────────────────
  //
  console.log("gulpfile.ts: " + (await writeFileAsync("src/main.ts", "" ) ? "ok" : "-"));
  console.log("sw.ts: " + (await writeFileAsync("src/sw.ts", swMake()) ? "ok" : "-"));
})();
