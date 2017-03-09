/* eslint-env mocha */
require('should')
var createFunction = require('.')

var func = createFunction(function (options) { return options })

it('should call function with options', function () {
  var options = { foo: 'foo' }
  func(options).foo.should.equal(options.foo)
})

it('should create functions with default options', function () {
  var partialOptions = { foo: 'foo' }
  var restOptions = { bar: 'bar' }
  var partialFunc = func.create(partialOptions)
  var options = partialFunc(restOptions)
  options.foo.should.equal(partialOptions.foo)
  options.bar.should.equal(restOptions.bar)
})

it('should be able to create functions based on created functions', function () {
  var partialOptions1 = { foo: 'foo' }
  var partialOptions2 = { bar: 'bar' }
  var restOptions = { baz: 'baz' }
  var partialFunc1 = func.create(partialOptions1)
  var partialFunc2 = partialFunc1.create(partialOptions2)
  var options = partialFunc2(restOptions)
  options.foo.should.equal(partialOptions1.foo)
  options.bar.should.equal(partialOptions2.bar)
  options.baz.should.equal(restOptions.baz)
})

it('should throw when call without callables', function () {
  void function () { createFunction() }.should.throw(TypeError)
  void function () { createFunction(1) }.should.throw(TypeError)
})
