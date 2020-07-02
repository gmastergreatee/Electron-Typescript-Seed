"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
// Disable all security warnings
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';
console.log('Hi there bro');
document.addEventListener('DOMContentLoaded', function () {
    // Using remote electron functionality from renderer process
    var msgBtn = document.getElementById('btn-msg');
    msgBtn.addEventListener('click', function () {
        // removing "remote.getCurrentWindow()" arg from below method
        // call will detach the msgBox from the browserWindow
        electron_1.remote.dialog.showMessageBox(electron_1.remote.getCurrentWindow(), {
            message: 'U pressed a button',
            type: 'info',
            buttons: ['ok', 'cancel'],
            title: 'Button Press'
        });
    });
    //
});
//# sourceMappingURL=index.js.map