// 查看 MDN 对比效果

// 1. forEach
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Polyfill
Array.prototype.myForEach = function(callback) {
  'use strict'

  if (this == null)
    throw new TypeError( 'Array.prototype.myForEach called on null or undefined' )
  if (typeof callback !== 'function')
    throw new TypeError( callback + 'is not a function')

  var O = Object(this)
  var len = O.length >>> 0

  var T, k = 0

  if (arguments.length > 1) {
    T = arguments[1]
  }

  while(k < len) {
    var KValue = O[k]
    if (k in O)
      callback.call(T, KValue, k, O)
    k++
  }
}

Array.prototype.myForEach.call({
  0: 1,
  1: 2,
  2: 3,
  length: 3
}, function(item, index, arr) {
  console.log(item, index, arr)
})

// Array.prototype.myForEach = function(callback, thisArg) {
//   for(var i = 0; i < this.length; i++)
//     callback.call(thisArg, this[i], i, this)
// }

// 2. map
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Polyfill

Array.prototype.myMap = function(callback) {
  if (this == null)
    throw new TypeError( 'Array.prototype.myMap called on null or undefined' )
  if (typeof callback !== 'function')
    throw new TypeError( callback + 'is not a function')

  var O = Object(this)
  var len = O.length >>> 0

  var T, A, k = 0

  if (arguments.length > 1) {
    T = arguments[1]
  }

  A = new Array(len)

  while(k < len) {
    var KValue, result
    if (k in O) {
      result = callback.call(T, KValue, k, O)
      A[k] = result
    }
    k++
  }

  return A
}
// Array.prototype.myMap = function(callback, thisArg) {
//   var newArr = []
//   for(var i = 0; i < this.length; i++) {
//     var result = callback.call(thisArg, this[i], i, this)
//     newArr.push(result)
//   }
//   return newArr
// }

// 3. reduce
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Polyfill

Array.prototype.myReduce = function(callback, initialValue) {
  'use strict'

  if (this == null)
    throw new TypeError( 'Array.prototype.myReduce called on null or undefined' )
  if (typeof callback !== 'function')
    throw new TypeError( callback + 'is not a function')

  // var acc, 

}
// Array.prototype.myReduce = function(callback, initialValue) {
//   if (this.length === 0) {
//     if (void 0 === initialValue)
//       throw new Error('legnth == 0')
//     else
//       return initialValue
//   }
//   if (this.length === 1) {
//     return this[0]
//   }
  
//   var firstIndex = 1
//   var computedResult = this[0]
//   if (void 0 !== initialValue) {
//     firstIndex = 0
//     computedResult = initialValue
//   }
//   for(var i = firstIndex; i < this.length; i++) {
//     computedResult = callback(computedResult, this[i], i, this)
//   }
//   return computedResult
// }

// 4. some
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Array.prototype.mySome = function() {
  'use strict';

  if (this == null) {
    throw new TypeError('Array.prototype.some called on null or undefined');
  }

  if (typeof fun !== 'function') {
    throw new TypeError();
  }

  var t = Object(this);
  var len = t.length >>> 0;

  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  for (var i = 0; i < len; i++) {
    if (i in t && fun.call(thisArg, t[i], i, t)) {
      return true;
    }
  }

  return false;
}

// 5. every
Array.prototype.myEvery = function() {}

// ;[1, 2, 3, 4].myForEach(function(item, index, arr) {
//   console.log(item, index, arr)
// })


Array.prototype.myForEach.call(false, function(item, index, arr) {
  console.log(item, index, arr)
})