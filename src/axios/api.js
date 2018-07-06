import request from '@/axios/service'

let base = ''

export function restRequest (url, method, params) {
  return request({
    url: `${base}${url}`,
    method: `${method}`,
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
export function formRequest (url, method, params) {
  return request({
    url: `${base}${url}`,
    method: `${method}`,
    params: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
