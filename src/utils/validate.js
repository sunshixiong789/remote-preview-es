/**
 * Created by jiachenpan on 16/11/18.
 */

export function isvalidUsername(str) {
  /** const validMap = ['admin', 'editor'] */
  if (str !== 'admin') {
    return false
  } else {
    return true// validMap.indexOf(str.trim()) >= 0
  }
}

/**
 * 合法url
 * @export
 * @param {any} textval
 * @returns
 */
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/**
 * 小写字母
 * @export
 * @param {any} str
 * @returns
 */
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * 大写字母
 * @export
 * @param {any} str
 * @returns
 */
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * 大小写字母
 * @export
 * @param {any} str
 * @returns
 */
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}
