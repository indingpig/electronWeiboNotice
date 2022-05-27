import { ipcMain } from 'electron';
export function ipc() {
  ipcMain.handle('login1', async () => {
    // mock一个状态码
    const code = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    return code;
  });
}
