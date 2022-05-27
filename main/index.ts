import {app, BrowserWindow} from 'electron';
import {ipc} from "./ipc";
import {create} from './mainWindow';
app.on('ready', () => {
    process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'; // 关闭web安全警告
    create();
    ipc();
});
