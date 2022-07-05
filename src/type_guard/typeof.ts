const set = new Set([])
const map = new Map()
const array = new Array()
console.log(typeof set);
console.log(typeof map);
console.log(typeof array);
console.log(typeof null);


// typeof的局限性：使用typeof无法 探测出null set map array的类型
console.log(typeof null);
// Object.prototype.toString.call的妙用:可以使用
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(set));
console.log(Object.prototype.toString.call(map));
console.log(Object.prototype.toString.call(array));
