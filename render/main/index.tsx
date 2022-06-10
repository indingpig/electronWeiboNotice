import React, { useEffect, useState } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { ipcRenderer } from 'electron';
import { renderFetch } from './../common/renderHttps';

const App = () => {
	const [localCode, setLocalCode] = useState('');//本身的控制码
	const login = async () => {
		// 获取登陆后的控制码
		// 因为登录状态是在主进程维护，通过主进程来处理ipc事件
		// const code = await ipcRenderer.invoke('start', {aaa: 123});
		let url = 'https://m.weibo.cn/api/container/getIndex';
		const params = {
			type: 'uid',
			value: '5976999361',
			containerid: '1076035976999361'
		};
		const code = await renderFetch.get(url, params);
		console.log(code);

		// 存储控制码
		setLocalCode(code);
	};
	return (
		<div>
			<div>hello react</div>
			<button onClick={()=>login()}>登录</button>
			{/* <div> 本身的控制码:  {localCode} </div> */}
		</div>
	);
};
const container: HTMLElement | null = document.getElementById('root') || document.createElement('id');
const root = ReactDOMClient.createRoot(container);
root.render(<App></App>);

