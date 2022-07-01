import { ipcRenderer } from "electron";


interface httpCoing {
  method: string,
  header?: string
}

interface config extends httpCoing {
  
}

class Request {
  async get(url: string, config: Object) {
    return await ipcRenderer.invoke('RequestGet',url, config);
  }

  async post(url: string, config: Object) {

  }
}

const renderFetch = new Request();

export {
  renderFetch
};