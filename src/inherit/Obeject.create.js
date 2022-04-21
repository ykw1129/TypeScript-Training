
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
function _extends (parent,son){
    son.prototype = Object.create(parent.prototype)
    son.prototype.constructor = son
}
_extends(Person,Student)
let stu = new Student('jack', 14, ['math'], 'A')
console.log(stu.__proto__)