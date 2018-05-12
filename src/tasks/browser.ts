import * as browserSync from "browser-sync";
export namespace Browser {
  let browserSyncInstance: browserSync.BrowserSyncInstance;
  export const getBrowserSyncInstance = () => {
    if (browserSyncInstance === undefined || browserSyncInstance === null) {
      browserSyncInstance = browserSync.create();
    }
    return browserSyncInstance;
  };
  export function browserSyncDir(baseDir: string = "./", port: number = 5500) {
    getBrowserSyncInstance().init({
      port,
      https: false,
      server: {
        baseDir,
      },
    });
  }
  export function browserSyncProxy(proxy: string, port: number = 5500) {
    getBrowserSyncInstance().init({
      proxy,
      https: false,
      reloadDebounce: 600,
      // Disable UI completely
      ui: false,
      port,
    });
  }
  export function reload() {
    getBrowserSyncInstance().reload();
  }
}
