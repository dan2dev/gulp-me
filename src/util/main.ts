import { ChildProcess, execSync, exec } from "child_process";
import * as fs from "fs-extra";
import * as path from "path";

export async function execAsync(command: string): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    exec(command, (err: any, stdout: any, stderr: any) => {
      if (err) { resolve(false); } else { resolve(true); }
    });
  });
}
export function ensureDirectoryExistence(filePath: string) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}
export async function writeFileAsync(filePath: string, fileString: string, replace: boolean = false): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    ensureDirectoryExistence(filePath);
    if (!fs.existsSync(filePath) || replace) {
      fs.writeFile(filePath, fileString, {
        encoding: "utf8",
      }, (err: any) => {
        if (err) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    } else {
      resolve(false);
    }
  });
}
