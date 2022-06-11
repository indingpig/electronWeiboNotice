import React, { useEffect, useState } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import {renderFetch as myFecth } from './../common/renderHttps';
import { Weibo, CardType } from './interface';

const App = () => {
	const [localCode, setLocalCode] = useState('');//本身的控制码
	const login = async () => {
		let url = 'https://m.weibo.cn/api/container/getIndex';
		const params = {
			type: 'uid',
			value: '5976999361',
			containerid: '1076035976999361'
		};
		const {data}:Weibo = await myFecth.get(url, params);
		let cardsFirst: CardType;
		if (data.cards && data.cards.length > 1) {
			cardsFirst = data.cards[1];
			console.log(cardsFirst);
		}
		// setLocalCode(data);
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

