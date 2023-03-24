import axios from 'axios';
import React from 'react'
import doRequest from './umiRequestDemo'
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
    doRequest()
  }, []);

  return (
    <div>AxiosDemo
      <div id='umi-app'></div>
    </div>
  )
}

export default AxiosDemo