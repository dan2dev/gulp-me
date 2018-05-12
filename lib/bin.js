#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./util/main");
const tslintMake_1 = require("./files-generator/tslintMake");
const tsconfigMake_1 = require("./files-generator/tsconfigMake");
const gulpfilejsMake_1 = require("./files-generator/gulpfilejsMake");
const gulpfiletsMake_1 = require("./files-generator/gulpfiletsMake");
const swMake_1 = require("./files-generator/swMake");
const args = require("args");
(function main() {
    return __awaiter(this, void 0, void 0, function* () {
        args
            .option("type", "Type of the project (pwa,web,lib) ", "pwa")
            .option("reset", "Replace all files with new ones", "false");
        const flags = args.parse(process.argv);
        const isReset = flags.reset;
        const isPwa = flags.type.toLowerCase() === "pwa";
        const isWeb = isPwa || flags.type.toLowerCase() === "web";
        const isLib = isPwa || flags.type.toLowerCase() === "lib";
        //
        // ─── INSTALL REQUIRED NPM MODULES ───────────────────────────────────────────────
        //
        console.log("install gulp: " + ((yield main_1.execAsync("yarn add gulp @types/gulp -D")) ? "ok" : "-"));
        console.log("install gulp-me: " + ((yield main_1.execAsync("yarn add gulp-me -D")) ? "ok" : "-"));
        console.log("install types: " + ((yield main_1.execAsync("yarn add @types/window-or-global @types/node")) ? "ok" : "-"));
        console.log("install typescript: " + ((yield main_1.execAsync("yarn add typescript -D")) ? "ok" : "-"));
        //
        // ─── CREATE DEFAULT FILES ───────────────────────────────────────────────────────
        //
        console.log("tsconfig.json: " + ((yield main_1.writeFileAsync("tsconfig.json", tsconfigMake_1.tsconfigMake())) ? "ok" : "-"));
        console.log("tslint.json: " + ((yield main_1.writeFileAsync("tslint.json", tslintMake_1.tslintMake())) ? "ok" : "-"));
        console.log("gulpfile.js: " + ((yield main_1.writeFileAsync("gulpfile.js", gulpfilejsMake_1.gulpfilejsMake(), true)) ? "ok" : "-"));
        console.log("gulpfile.ts: " + ((yield main_1.writeFileAsync("gulpfile.ts", gulpfiletsMake_1.gulpfiletsMake())) ? "ok" : "-"));
        //
        // ─── PWA FILES ───────────────────────────────────────────────────
        //
        console.log("gulpfile.ts: " + ((yield main_1.writeFileAsync("src/main.ts", "")) ? "ok" : "-"));
        console.log("sw.ts: " + ((yield main_1.writeFileAsync("src/sw.ts", swMake_1.swMake())) ? "ok" : "-"));
    });
})();
//# sourceMappingURL=bin.js.map