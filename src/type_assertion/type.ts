class Person {
    address = "123"
    do() {

    }
}
class Student {

}
let people = new Person()
// let result = people as Stu; //类型断言
let result = <Student>people //类型转换

const asset = {
    name: "jack",
    phone: 1234,
    address: 'earth'
}
type obj = {
    name: string
    phone: number
}

console.log(asset.name)
export { }