function reject(obj, keys) {
  return Object.keys(obj)
    .filter((k) => !keys.includes(k))
    .map((k) => ({ [k]: obj[k] }))
    .reduce((res, o) => Object.assign(res, o), {})
}
export { reject }
