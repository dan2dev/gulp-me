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
const child_process_1 = require("child_process");
const fs = require("fs-extra");
const path = require("path");
function execAsync(command) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            child_process_1.exec(command, (err, stdout, stderr) => {
                if (err) {
                    resolve(false);
                }
                else {
                    resolve(true);
                }
            });
        });
    });
}
exports.execAsync = execAsync;
function ensureDirectoryExistence(filePath) {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}
exports.ensureDirectoryExistence = ensureDirectoryExistence;
function writeFileAsync(filePath, fileString, replace = false) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            ensureDirectoryExistence(filePath);
            if (!fs.existsSync(filePath) || replace) {
                fs.writeFile(filePath, fileString, {
                    encoding: "utf8",
                }, (err) => {
                    if (err) {
                        resolve(false);
                    }
                    else {
                        resolve(true);
                    }
                });
            }
            else {
                resolve(false);
            }
        });
    });
}
exports.writeFileAsync = writeFileAsync;
//# sourceMappingURL=main.js.map