import { ipcRenderer } from "electron";


interface httpCoing {
  method: string,
  header?: string
}

interface config extends httpCoing {
  
}

class RenderHttp {
  async fecth(url: string, config: Object) {
    return await ipcRenderer.invoke('Request',url, config);
  }
}

class Request extends RenderHttp {
  get(url: string, config: Object) {
    return this.fecth(url, config);
  }

  post(url: string, config: Object) {

  }
}

const renderFetch = new Request();

export {
  renderFetch
};