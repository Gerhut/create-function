var xtend = require('xtend')

function create (defaults) {
  return createFunction(this.__call__,
    xtend(this.defaults, defaults))
}

function createFunction (implementation, __defaults__) {
  function createdFunction (options) {
    return createdFunction.__call__.call(this,
      xtend(createdFunction.defaults, options))
  }
  createdFunction.__call__ = implementation
  createdFunction.defaults = __defaults__
  createdFunction.create = create
  return createdFunction
}

module.exports = createFunction
