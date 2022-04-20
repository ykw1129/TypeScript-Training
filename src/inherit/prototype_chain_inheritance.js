// 原型链继承
function Person(name, age, course=[]){
    this.name = name
    this.age = age
    this.course = course
}
Person.prototype.eating = function(){
    console.log(`eating`)
}
function Student(classes){
    this.classes = classes
}
Student.prototype = new Person()
Student.prototype.constructor = Student
Student.prototype.studying = function(){
    console.log(`studying`)
}
// 缺点:1、无法传递参数给父类 2、改动引用类型时会影响其他的实例对象