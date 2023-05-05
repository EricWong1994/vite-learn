import axios from 'axios';
import qs from 'qs'

// function get(url: string, params?: any) {
// 	// return new Promise((resolve, reject) => {
// 	// 	axios.get(url, {
// 	// 		params,
// 	// 	})
// 	// 		.then(res => {
// 	// 			resolve(res);
// 	// 		})
// 	// 		.catch(err => {
// 	// 			reject(err);
// 	// 		});
//   // });

//   return axios.get(url, {
// 			params,
// 		})
// }

// function get(url: string, params?: any) {
//  return axios.get(url, {params})
//         .then(response => {
//             return response.data
//         }, err => {
//             throw new Error(err)  // 再看这里
//         })
// }
// axios.get(url, {
//   params: {
//     ids: [1, 2, 3],
//     type: 1
//   },
//   paramsSerializer: params => {
//     return qs.stringify(params, { indices: false })
//   }
// })

export function get(url: string, params = {}, config: object = {}) {
  return axios.get(url, {
    params,
    paramsSerializer: {
      serialize: (params) => {
        return qs.stringify(params, config)
        // return qs.stringify(params, { arrayFormat: 'indices' })
      }
    }
    // 报错
    //     paramsSerializer: params => {
    //   return qs.stringify(params, { indices: false })
    // }
  })
    .then(response => {
      return response.data
    }, err => {
      throw new Error(err)  // 再看这里
    })
}

export function post(url: string, data = {}) {
  return axios.post(url, qs.stringify(data, {
    // indices: false
  }))
    .then(response => {
      return response.data
    }, err => {
      throw new Error(err)  // 再看这里
    })
}
