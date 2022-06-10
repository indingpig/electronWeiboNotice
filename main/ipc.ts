import { ipcMain, net } from 'electron';
import myFetch from './common/https';
export function ipc() {
  ipcMain.handle('login', async () => {
    // mock一个状态码
    const code = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    return code;
  });
  ipcMain.handle('start', async (event, params) => {
    console.log(event, params);
    const res = getWeibo();
    return res;
  });
  ipcMain.on('Request', (event, url: string, params: Object) => {
    console.log(event, params);
  });
}

function getWeibo():Promise<unknown> {
  return myFetch.get('https://m.weibo.cn/api/container/getIndex', {
    type: 'uid',
    value: '5976999361',
    containerid: '1076035976999361'
  }).then(data => data).catch(err => err);
}