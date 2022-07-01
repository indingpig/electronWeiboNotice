import React, { useEffect, useState } from 'react';
import { Weibo, CardType } from './../../../interface';
import {renderFetch as myFecth } from './../../utils/renderHttps';

const Login = () => {
  const handleLogin = async ():Promise<void> => {
    // const [localCode, setLocalCode] = useState('');//本身的控制码
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
  };
  return (
    <div>
      <button onClick={() => handleLogin()}>
        登录
      </button>
    </div>
  );
};

export default Login;
