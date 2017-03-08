var xtend = require('xtend')

function createFunction (func, __defaults) {
  function createdFunction (options) {
    return func(xtend(__defaults, options))
  }
  createdFunction.create = function create (defaults) {
    return createFunction(func, xtend(__defaults, defaults))
  }
  return createdFunction
}

module.exports = createFunction
