import axios from 'axios';
import React from 'react'

// https://codesandbox.io/s/condescending-austin-9tiqkc?file=/src/App.js
// TODO
function AxiosDemo() {
  const api = axios.create({
    baseURL: "kaelch.cafe24.com/json/store.json"
    // baseURL: "https://9tiqkc.csb.app/kaelch.cafe24.com/json/store.json"
  });

  const getDate = async () => {
    const data = await api.get("/", {});
    console.log(data);
  };

  useEffect(() => {
    getDate();
  }, []);

  return (
    <div>AxiosDemo</div>
  )
}

export default AxiosDemo