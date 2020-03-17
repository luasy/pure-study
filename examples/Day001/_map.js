// 2. map
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Polyfill
Array.prototype.myMap = function myMap(callback) {
  // 1. 如果 this 为空，即 `null` 或者 `undefined`, 其实就没必要执行下面步骤。
  // 但是为什么要报错，个人认为如果这里不给出明确的错误，特别在伪数组注入的情况下，错误较难发现。
  if (this == null) {
    throw new TypeError('Array.prototype.myMap called on null or undefined');
  }
  // 2. 同理，如果 `callback` 作为核心参数，类型错误，则无需继续执行。
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback}is not a function`);
  }

  // 3. 这一步的意思是把其他类型数据全部转化成 `对象`, 即 `{}`
  // 为什么用这个呢？个人感觉，，就是简单。这样就可以把其他的原始数据类型都编变成 `{}`
  var O = Object(this);
  // 4. 位运算。移动 0 位，即并不移动，那有什么异议？
  // 可以兼容的把其他类型的数据都转化成数字类型，如果是布尔类型，对象等，直接可以变成 0
  var len = O.length >>> 0;

  var T; // this
  var A; // array
  var k = 0; // key

  if (arguments.length > 1) {
    T = arguments[1];
  }

  // 5. 给定数组的长度，底层不做扩容处理，提高代码效率
  A = new Array(len);

  while (k < len) {
    var KValue;
    var result;
    // 6. 为什么要做一个是否有 key 的判断呢
    // 在实现的规则中有说明，像这种没有被声明的数组项，是无需处理的，在这里的意思可以理解为不触发调用。
    // 生活的相似例子，如：稀疏矩阵。[1, 2, , 4], 第三个不应该触发回调。
    if (k in O) {
      result = callback.call(T, KValue, k, O);
      A[k] = result;
    }
    k++;
  }

  return A;
};

// 额外：粗浅实现，用于对比。
// Array.prototype.myMap = function(callback, thisArg) {
//   var newArr = []
//   for(var i = 0; i < this.length; i++) {
//     var result = callback.call(thisArg, this[i], i, this)
//     newArr.push(result)
//   }
//   return newArr
// }
