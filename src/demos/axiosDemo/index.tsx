import axios from 'axios';
import React from 'react'
import doRequest from './umiRequestDemo'
import { get, post } from './request';
// https://codesandbox.io/s/condescending-austin-9tiqkc?file=/src/App.js
// TODO
function AxiosDemo() {
  const api = axios.create({
    baseURL: "kaelch.cafe24.com/json/store.json"
    // baseURL: "https://9tiqkc.csb.app/kaelch.cafe24.com/json/store.json"
  });

  const getDate = async () => {
    const data = await axios({
      method: 'get',
      url: 'http://httpbin.org/get',
      timeout: 2000
    })
    console.log(data);
  };

  useEffect(() => {
    // getDate();
    // doRequest()
    // 最简单get请求
    // get('http://httpbin.org/get').then(res => {

    // 带参数get
    // get('https://httpbin.org/get?department=1').then(res => {
    //   console.log('getres', res)
    // })
    // post('http://httpbin.org/status/200', { name: 'Eric Wong' }).then(res => {
    const param = {
      // name: 'Eric Wong',
      ids: [1, 2, 3]
    };

    get('https://httpbin.org/get', param).then(res => {
      console.log('get:', res)
    })
    // post('http://httpbin.org/post', param).then(res => {
    //   console.log('post: ', res)
    // })


    // [
    //   { indices: false },
    //   { arrayFormat: 'indices' },
    //   { arrayFormat: 'brackets' },
    //   { arrayFormat: 'repeat' },
    // ].forEach((item) => {
    //   get('https://httpbin.org/get', param, item).then(res => {
    //     console.log(`get:${item.arrayFormat}`, res)
    //   })
    // })


    // axios({
    //   method: 'get',
    //   url: '/users/:userId/posts/:postId',
    //   indices: {
    //     userId: 0,
    //     postId: 1
    //   },
    //   data: ['1234', '5678']
    // })
  }, []);

  return (
    <div>AxiosDemo
      <div id='umi-app'></div>
    </div>
  )
}

export default AxiosDemo