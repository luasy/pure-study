// 3. reduce
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Polyfill

// 2. callback 必须为函数
// 3. 如果 initialValue 有的话，直接赋值给 value
// 4. 如果 initial 没有，就需要根据长度找到第一个元素的位置，并赋值给 value，同时索引下移一位。
Array.prototype.myReduce = function myReduce(callback) {
  // 1. 如果 this 为空，即 `null` 或者 `undefined`, 其实就没必要执行下面步骤。
  // 但是为什么要报错，个人认为如果这里不给出明确的错误，特别在伪数组注入的情况下，错误较难发现。
  if (this == null) {
    throw new TypeError('Array.prototype.myReduce called on null or undefined');
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

  var k = 0; // key
  var value; // 每次的返回值

  // 5. 如果有初始值就直接用。
  if (arguments.length > 1) {
    value = arguments[1];
  } else {
    // 6. 如果没有初始值，其实需要去找初始值来使用。稍微麻烦一点。
    // 其实这一步是为了找到初始值。对于伪数组，可能下标大于length
    // { 10: 1, length: 3 }, 这样根本没法取到初始值。
    // 所以用 `while` 来取初始值
    while (k < len && !(k in O)) {
      k++;
    }
    if (k >= len) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    // 所以，找到初始值赋值给 `value`, k的下标`+1`, 让下面的回调传的是下一个值。
    value = O[k++];
  }
  while (k < len) {
    if (k in O) {
      var KValue = O[k];
      value = callback(value, KValue, k, O);
    }
    k++;
  }
  return value;
};

// 测试代码
// var sum = Array.prototype.myReduce.call([1, 2, 3, 4, 5], (accumulator, currentValue) => {
//   return accumulator + currentValue;
// });
// console.log(sum);

// 额外：粗浅实现，用于对比。
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
