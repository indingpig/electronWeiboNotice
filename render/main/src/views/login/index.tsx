import React, { useEffect, useState, FormEvent } from 'react';
import { ipcRenderer } from 'electron';
import { Weibo, CardType } from './../../../interface';
import {renderFetch as myFecth } from './../../utils/renderHttps';
const Login = (): JSX.Element => {
  const [userInfo, setUserInfo] = useState({
    userName: 'sheldon',
    password: 'buyaotoukanwomima'
  });
  const handleLogin = async ():Promise<void> => {
    // const [localCode, setLocalCode] = useState('');//本身的控制码
    // let url = 'https://m.weibo.cn/api/container/getIndex';
    // const params = {
    //   type: 'uid',
    //   value: '5976999361',
    //   containerid: '1076035976999361'
    // };
    // const {data}:Weibo = await myFecth.get(url, params);
    // let cardsFirst: CardType;
    // if (data.cards && data.cards.length > 1) {
    //   cardsFirst = data.cards[1];
    //   console.log(cardsFirst);
    // }
    const res = await ipcRenderer.invoke('MockLogin', userInfo);
    console.log(res);
  };
  const handleInput = (event:FormEvent<HTMLInputElement>, key: 'userName' | 'password') =>  {
    const value = (event.target as HTMLInputElement).value;
    const temp = JSON.parse(JSON.stringify(userInfo));
    temp[key] = value;
    console.log(temp);
    setUserInfo(temp);
  };
  return (
    <div>
      <section>
        {JSON.stringify(userInfo)}
        <form>
          <label htmlFor="userName">
            <input type="text" placeholder='user name'
              defaultValue={userInfo.userName}
              name='userName' onInput={(event) => handleInput(event, 'userName')}/>
          </label>
          <label htmlFor="userPwd">
            <input type="password" placeholder='password'
              defaultValue={userInfo.password}
              name='password' onInput={(event) => handleInput(event, 'password')}/>
          </label>
          <button type='button' onClick={() => handleLogin()}>
            登录
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
