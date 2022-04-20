// 借用构造函数继承
function Person(name, age, course = []) {
    this.name = name
    this.age = age
    this.course = course
}
Person.prototype.eating = function () {
    console.log(`eating`)
}
function Student(name,age, course,classes) {
    Person.call(this,name,age,course)
    this.classes = classes
}
Student.prototype.studying = function () {
    console.log(`studying`)
}
let stu1 = new Student('jack', 12, ['math', 'art'],'C')
stu1.eating()