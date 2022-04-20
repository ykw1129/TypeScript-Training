// 组合模式继承 原型链继承和借用构造函数继承
function Person(name, age, course = []) {
    this.name = name
    this.age = age
    this.course = course
}
Person.prototype.eating = function () {
    console.log(`eating`)
}
function Student(name, age, course, classes) {
    Person.call(this, name, age, course)
    this.classes = classes
}
Student.prototype = new Person()

let stu = new Student('jack',14,['math'],'A')
let stu1 = new Student('jack', 14, ['math'], 'A')
stu.course.push('history')
console.log(stu,stu1)