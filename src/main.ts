import { app, BrowserWindow } from 'electron';
import * as path from 'path';

let isDevelopment = true;

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
    });

    if (isDevelopment) {
        mainWindow.loadURL('http://127.0.0.1:33455/index.html');
    } else {
        mainWindow.loadFile(path.join(__dirname, '/view/index.html'));
    }
    mainWindow.webContents.openDevTools();
}

app.on('ready', () => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            // On macOS it's common to re-create a window in the app when the
            // dock icon is clicked and there are no other windows open.
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.exit();
    }
});
