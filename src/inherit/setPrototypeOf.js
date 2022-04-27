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
function _extends (parent){
    let middle = { }
    return Object.setPrototypeOf(middle,parent.prototype)
}
let middle = _extends(Person)
Student.prototype = middle
Student.prototype.constructor = Student