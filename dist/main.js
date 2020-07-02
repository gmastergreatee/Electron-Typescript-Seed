"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var electron_1 = require("electron");
var path = __importStar(require("path"));
var isDevelopment = true;
function createWindow() {
    var mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.on('ready-to-show', function () {
        mainWindow.show();
    });
    if (isDevelopment) {
        mainWindow.loadURL('http://127.0.0.1:33455/index.html');
    }
    else {
        mainWindow.loadFile(path.join(__dirname, '../view/index.html'));
    }
    mainWindow.webContents.openDevTools();
}
electron_1.app.on('ready', function () {
    createWindow();
    electron_1.app.on('activate', function () {
        if (electron_1.BrowserWindow.getAllWindows().length === 0) {
            // On macOS it's common to re-create a window in the app when the
            // dock icon is clicked and there are no other windows open.
            createWindow();
        }
    });
});
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.exit();
    }
});
//# sourceMappingURL=main.js.map