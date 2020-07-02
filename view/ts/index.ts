import { remote } from 'electron';

// Disable all security warnings
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';

console.log('Hi there bro');

document.addEventListener('DOMContentLoaded', () => {
    // Using remote electron functionality from renderer process
    let msgBtn = document.getElementById('btn-msg');
    msgBtn.addEventListener('click', () => {
        // removing "remote.getCurrentWindow()" arg from below method
        // call will detach the msgBox from the browserWindow
        remote.dialog
            .showMessageBox(remote.getCurrentWindow(), {
                message: 'U pressed a button',
                type: 'info',
                buttons: ['ok', 'cancel'],
                title: 'Button Press',
            })
            .then((e) => {
                switch (e.response) {
                    case 0:
                        console.log('U pressed OK');
                        break;
                    case 1:
                        console.log('U cancelled the box');
                }
            });
    });
    //
});
