// 产生多态的条件
// 1、必须存在继承关系2、必须有方法重写
class Animal {
    constructor(public name: string) {
        this.name = name;
    }
    public eat() {
        console.log("eat");
    }
}
class Dog extends Animal {
    constructor(public name: string) {
        super(name);
    }
    public eat() {
        console.log("dog eat");
    }
}
class Cat extends Animal {
    constructor(public name: string) {
        super(name);
    }
    public eat() {
        console.log("cat eat");
    }
}
let animal: Animal = new Dog('lily');