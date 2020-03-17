// 查看 MDN 对比效果

// 1. forEach
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Polyfill
Array.prototype.myForEach = function myForEach(callback) {
  if (this == null) throw new TypeError('Array.prototype.myForEach called on null or undefined');
  if (typeof callback !== 'function') throw new TypeError(`${callback}is not a function`);

  const O = Object(this);
  const len = O.length >>> 0;

  let T;
  let k = 0;

  if (arguments.length > 1) {
    T = arguments[1];
  }

  while (k < len) {
    const KValue = O[k];
    if (k in O) callback.call(T, KValue, k, O);
    k++;
  }
};

// Array.prototype.myForEach = function(callback, thisArg) {
//   for(var i = 0; i < this.length; i++)
//     callback.call(thisArg, this[i], i, this)
// }

// 2. map
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Polyfill

Array.prototype.myMap = function myMap(callback) {
  if (this == null) throw new TypeError('Array.prototype.myMap called on null or undefined');
  if (typeof callback !== 'function') throw new TypeError(`${callback}is not a function`);

  var O = Object(this);
  var len = O.length >>> 0;

  var T;
  var A;
  var k = 0;

  if (arguments.length > 1) {
    T = arguments[1];
  }

  A = new Array(len);

  while (k < len) {
    var KValue;
    var result;
    if (k in O) {
      result = callback.call(T, KValue, k, O);
      A[k] = result;
    }
    k++;
  }

  return A;
};
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

Array.prototype.myReduce = function myReduce(callback) {
  if (this == null) {
    throw new TypeError('Array.prototype.myReduce called on null or undefined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback}is not a function`);
  }

  // var acc,
};
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
Array.prototype.mySome = function mySome() {
  if (this == null) {
    throw new TypeError('Array.prototype.some called on null or undefined');
  }

  if (typeof fun !== 'function') {
    throw new TypeError();
  }

  const t = Object(this);
  const len = t.length >>> 0;

  // const thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  for (let i = 0; i < len; i++) {
    // if (i in t && fun.call(thisArg, t[i], i, t)) {
    //   return true;
    // }
  }

  return false;
};

// 5. every
Array.prototype.myEvery = function myEvery() {};
