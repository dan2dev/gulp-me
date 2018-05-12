"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const browserSync = require("browser-sync");
var Browser;
(function (Browser) {
    let browserSyncInstance;
    Browser.getBrowserSyncInstance = () => {
        if (browserSyncInstance === undefined || browserSyncInstance === null) {
            browserSyncInstance = browserSync.create();
        }
        return browserSyncInstance;
    };
    function browserSyncDir(baseDir = "./", port = 5500) {
        Browser.getBrowserSyncInstance().init({
            port,
            https: false,
            server: {
                baseDir,
            },
        });
    }
    Browser.browserSyncDir = browserSyncDir;
    function browserSyncProxy(proxy, port = 5500) {
        Browser.getBrowserSyncInstance().init({
            proxy,
            https: false,
            reloadDebounce: 600,
            // Disable UI completely
            ui: false,
            port,
        });
    }
    Browser.browserSyncProxy = browserSyncProxy;
    function reload() {
        Browser.getBrowserSyncInstance().reload();
    }
    Browser.reload = reload;
})(Browser = exports.Browser || (exports.Browser = {}));
//# sourceMappingURL=browser.js.map