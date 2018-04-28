
/**
 * Number of dynamic props should equal a number of '?' signs in props
 * @param {Object} obj | Object from which we want to get a value
 * @param {String} props | String seperated by dots, to indicate a dynamic value pass '?' sign
 * @param {Array} dynamicProps | Array of dynamic props to replace '?' sign in props
 */
export const getObjProp = (obj, props, dynamicProps = []) => {
  let count = 0
  return props.split('.').reduce((acc, prop) => {
    if (prop === '?') {
      count++
      prop = dynamicProps[count - 1]
    }
    return acc && typeof acc === 'object' && Reflect.has(acc, prop) ? Reflect.get(acc, prop) : ''
  }, obj)
}

/**
 * Wrapper around getObjProp
 * It's useful when you need to get multiple props from the same object
 */
export function SafeObjProp (obj = {}) {
  this.obj = obj
}

// Wrapper for getObjProp
SafeObjProp.prototype.get = function (props = '', dynamicProps = []) {
  if (!this.obj && IS_DEV) {
    console.warn('[DEV] You did not pass object to safeObjProp!')
    return ''
  }
  return getObjProp(this.obj, props, dynamicProps)
}

SafeObjProp.prototype.getObj = function (obj = {}) {
  return this.obj
}

SafeObjProp.prototype.setObj = function (obj = {}) {
  this.obj = obj
}
