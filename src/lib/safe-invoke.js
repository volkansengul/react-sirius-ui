// eslint-disable-next-line consistent-return
export default function safeInvoke(fn, ...args) {
  if (typeof fn === 'function') {
    return fn(...args)
  }
}
