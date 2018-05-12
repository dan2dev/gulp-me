import { Gulp } from "gulp";
import { Browser as BrowserImport } from "./tasks/browser";
export declare let gulp: Gulp;
export declare namespace GulpMe {
    const Browser: typeof BrowserImport;
    function setEnv(environment: "dev" | "prod" | "both"): void;
    function getEnv(): "dev" | "prod" | "both";
    function inject(gulpInstance: Gulp): void;
    function tsc(dest?: string, types?: string): any;
    function jsBuild(entry: string, outputName: string): any;
    function copy(src: string | string[], dest: string): () => void;
}
export default GulpMe;
