// 1、理解keyof
// keyof表示获取一个类或者一个对象类型或者一个接口类型的所有属性名组成的联合类型
// 2、T extends object + extends keyof 组合使用带来的好处
let obj = { address: 'china', phone: 111, des: 'good' }
type keyofObj = keyof typeof obj
export { }