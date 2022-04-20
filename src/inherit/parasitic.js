// 寄生模式继承
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
function Middle (){

}
Middle.prototype = Person.prototype
Student.prototype = new Middle()  //__proto__ => Person.prototype
Student.prototype.constructor = Student
Student.prototype.study = function(){
    console.log('study')
}
let stu = new Student('jack', 14, ['math'], 'A')
stu.study()
stu.eating()
console.log(stu,stu.__proto__)
