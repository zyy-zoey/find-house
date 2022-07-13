import axios from 'axios'
import store from '@/store/index'
const instance = axios.create({
  baseURL: 'http://liufusong.top:8080/',
  timeout: 10000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  config.headers = {
    authorization: store.state.user
  }
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
