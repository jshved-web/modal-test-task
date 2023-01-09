export function parsePhoneNum(phoneNum = '') {
  const regex = /[\s()_-]/g
  return phoneNum.replace(regex, '')
}