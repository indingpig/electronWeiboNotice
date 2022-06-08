import {net} from 'electron';

// export function request() {
//   const clientHttp = net.request({

//   });
// }

// 5976999361
// https://m.weibo.cn/api/container/getIndex?type=uid&value=1850988623&containerid=1076031850988623
class ClientHttp {
  fetch(method: string, url: string) {  
    console.log(url);
    return new Promise((resolve, rejects) => {
      const clientHttp = net.request({
        method,
        url
      });
      clientHttp.on('response', (response) => {
        let chunk: string = '';
        response.on('data', (data) => chunk += data);

        response.on('end', () => {
          try {
            const parseData = JSON.parse(chunk);
            resolve(parseData);
          } catch (error) {
            rejects(error);
          }
        });
      });

      clientHttp.end();
    });
  }
}

class Request extends ClientHttp{
  get(url: string, params?: object) {
    let str: Array<string> = ['?'];
    if (params) {
      const paramsKey = Object.keys(params);
      paramsKey.forEach(key => {
        str.push(`${key}=${params[key]}`);
      });
    }
    url = url + str.join('&');
    return this.fetch('GET', url);
  }

  post() {

  }

  delete() {

  }
}

const myFetch = new Request();

export default myFetch;