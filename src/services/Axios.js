import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.common.contentType = 'application/json'
axios.defaults.headers.common['Cache-Control'] = 'no-cache'
axios.defaults.headers.common['Cache-control'] = 'no-store'
axios.defaults.headers.common.Pragma = 'no-cache'
axios.defaults.headers.common.Expires = 0

axios.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

axios.interceptors.response.use((response) => (
  // Do something with response data
  response
), (err) => {
  return Promise.reject(err)
})
// Do something with response error


export default {
  // type: get, post, put
  ajaxRequest(type, path, params = null, data = null) {
    return axios.request({
      url: path,
      params,
      data,
      method: type
    })
  },
  get(path, params) {
    return this.ajaxRequest('GET', path, params, null)
  },
  post(path, data) {
    return this.ajaxRequest('POST', path, null, data)
  },
  put(path, data) {
    return this.ajaxRequest('PUT', path, null, data)
  },
  delete(path, data) {
    return this.ajaxRequest('DELETE', path, null, data)
  }
}
