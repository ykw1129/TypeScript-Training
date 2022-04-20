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
function createNewPrototypeObj (parent,son){
    function Middle(){
        this.constructor = son
    }
    Middle.prototype = parent.prototype
    return new Middle()
}
let