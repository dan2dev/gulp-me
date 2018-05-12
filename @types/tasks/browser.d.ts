import * as browserSync from "browser-sync";
export declare namespace Browser {
    const getBrowserSyncInstance: () => browserSync.BrowserSyncInstance;
    function browserSyncDir(baseDir?: string, port?: number): void;
    function browserSyncProxy(proxy: string, port?: number): void;
    function reload(): void;
}
