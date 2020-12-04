export const is = n => {
  return n !== undefined && n !== null
}

export const num = n => {
  return typeof n === 'number' && !Number.isNaN(n)
}

export const func = n => {
  return typeof n === 'function'
}

export const get = (obj, ...paths) => {
  return paths
    .join('.')
    .split('.')
    .reduce((a, b) => (a && is(a[b]) ? a[b] : undefined), obj)
}

export const cascade = (fn, ...args) => {
  if (!func(fn)) return fn
  const next = fn(...args)
  return cascade(next, ...args)
}
