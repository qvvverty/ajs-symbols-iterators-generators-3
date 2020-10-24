function canIterate(object) {
  try {
    return typeof object[Symbol.iterator] === 'function';
  } catch (e) {
    return false;
  }
}

console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate(null)); // false
console.log(canIterate(undefined)); // false
console.log(canIterate(NaN)); // false
console.log(canIterate(10)); // false
console.log(canIterate('Netology')); // true
