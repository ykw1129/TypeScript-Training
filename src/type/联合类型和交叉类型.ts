type Person = {
    username: string,
    age: number,
}
type Student = {
    classes: number
    garde: string
}
// 交叉类型的变量可以接受联合类型中任意一种数据结构全部属性和方法
let john: Person & Student = { username: 'john', age: 20, classes: 1, garde: 'A' }
// 联合类型的变量只能获取两个类型的共同属性和方法
let ian: Person | Student = { username: 'ian', age: 20 }
export { }