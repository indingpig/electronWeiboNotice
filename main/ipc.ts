import { ipcMain, net, IpcMainInvokeEvent } from 'electron';
import myFetch from './common/https';
export function ipc() {
  ipcMain.handle('login', async () => {
    // mock一个状态码
    const code = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    return code;
  });
  // ipcMain.handle('start', async (event, params) => {
  //   console.log(event, params);
  //   const res = getWeibo();
  //   return res;
  // });
  ipcMain.handle('MockLogin', MockLogin1);
  ipcMain.handle('RequestGet', MockLogin1);
}

async function RequestGetHandle(event: IpcMainInvokeEvent, url:string, params: Object):Promise<unknown> {
  debugger;
  try {
    const data = await myFetch.get(url, params);
    return data;
  } catch (err) {
    return err;
  }
}

function MockLogin1(event: IpcMainInvokeEvent, params:any) {
  const userInfo = {
    password: 'buyaotoukanwomima',
    userName: 'sheldon'
  };
  const code = Math.floor(Math.random() * (999999 - 100000)) + 100000;
  if (params.userName === userInfo.userName && params.password === userInfo.password) {
    return code;
  }
  return false;
}