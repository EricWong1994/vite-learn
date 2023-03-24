import { extend } from "umi-request";

const $0 = extend({
  timeout: 1000
  // timeout: 2000
});

const $1 = extend({
  timeout: Infinity
});

const $2 = extend({
  timeout: 10e9
});

const $app = document.getElementById("umi-app")!;

async function doRequest() {
  try {
    // const data = await $0.get("https://jsonplaceholder.typicode.com/posts/1"); // 100ms
    const data = await $0.get("http://httpbin.org/get");
    console.log('data: ', data);
    // $app.innerHTML += JSON.stringify(data);
  } catch (e) {
    console.error(e);
  }
  // try {
  //   const data = await $1.get("https://jsonplaceholder.typicode.com/posts/1");
  //   $app.innerHTML += JSON.stringify(data);
  // } catch (e) {
  //   console.error(e);
  // }
  // try {
  //   const data = await $2.get("https://jsonplaceholder.typicode.com/posts/2");
  //   $app.innerHTML += JSON.stringify(data);
  // } catch (e) {
  //   console.error(e);
  // }
}

export default doRequest