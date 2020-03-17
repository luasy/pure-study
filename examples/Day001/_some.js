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
