import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../vuex/index'

/** 创建axios实例 */
const service = axios.create({
  timeout: 15000 // 请求超时时间
})
/** request拦截器 */
/** service.interceptors.request.use(config => {
  if (store.getters.token) {
    // Authorization bearer cb9d85da-ad4f-48a5-a882-60b0882c9e7c
    config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  Message({
    message: '请求超时!',
    type: 'error',
    center: true
  })
  console.log(error) // for debug
  Promise.reject(error)
}) */
/**
 *  respone 拦截器
 */
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response
    if (res.status !== 200) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
      if (res.status === 401) {
        MessageBox.confirm('未登录或者登录过期', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload()// 为了重新实例化vue-router对象 避免bug
          })
        })
      }
      return Promise.reject(new Error('error'))
    } else {
      return response
    }
  },
  error => {
    if (error.response.status === 504 || error.response.status === 404) {
      Message({message: '服务器被吃了⊙﹏⊙∥', type: 'error'})
    } else if (error.response.status === 403) {
      Message({message: '权限不足,请联系管理员!', type: 'error'})
    } else {
      if (error.response.data.message !== null) {
        Message({
          message: error.response.data.message,
          type: 'error',
          duration: 5 * 1000
        })
      } else {
        Message({
          message: error.response.data.error,
          type: 'error',
          duration: 5 * 1000
        })
      }
    }
    return Promise.reject(error)
  }
)

export default service
