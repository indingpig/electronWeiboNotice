import {app, BrowserWindow} from 'electron';
import isDev from 'electron-is-dev';
// import electronReloader from 'electron-reloader';
import electronReload from 'electron-reload';
import {join, resolve} from 'path';
import {ipc} from "./ipc";
import {create} from './mainWindow';

// console.log(__dirname);
if (isDev) {
	// electronReloader(module, {
  //   debug: true,
  //   watchRenderer: true,
	// 	ignore: [
	// 		/node_modules|[\/\\]\./,
	// 		/render/,
	// 		'./tsconfig.json',
	// 		/^\.\/.*\.json$/,
	// 		/^\.\/$/
	// 	]
	// });
	electronReload(__dirname, {
		electron: join(resolve(__dirname, '..'), 'node_modules', '.bin', 'electron'),
		hardResetMethod: 'exit',
		ignored: [
			/node_modules|[\/\\]\./,
			/render/,
			'./tsconfig.json',
			/^\.\/.*\.json$/,
			/^\.\/$/
		]
	});
}

const readyFn: Function = ():void => {
	process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'; // 关闭web安全警告
	create();
	ipc();
};

app.on('ready', () => {
		readyFn();
});

app.on('window-all-closed', () => {
	// On macOS it is common for applications and their 
	// menu bar to stay active until the user quits 
	// explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
			app.quit();
	}
});

app.on('activate', () => {
	// On macOS it's common to re-create a window in the 
	// app when the dock icon is clicked and there are no 
	// other windows open.
	if (BrowserWindow.getAllWindows().length === 0) {
		create();
	}
});

// app.whenReady().then(readyFn());