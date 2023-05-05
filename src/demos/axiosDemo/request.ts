import axios from 'axios';
import qs from 'qs'

export function get(url: string, params = {}) {
  return axios.get(url, {
    params,
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
