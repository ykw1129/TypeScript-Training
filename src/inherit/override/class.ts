// super 三种用法
// 1、放在构造函数中 引用父类的实例变量
// 2、代表构造函数的原型对象
// 重写 override
// 条件:一定发生在继承的子类中
// 位置：子类重写父类的方法
// 应用场景：当父类中的方法的实现不能满足子类功能需要或不能完全满足子类功能需要时，就需要在子类中进行
// 好处：让所有的子列共用父类的方法已经实现了一部分功能的代码
// 定义规则：1、和父类同名 2、参数和父类相同，如果是引用类型的参数，需要依据具体类型定义 3、父类方法的访问范围【方位修饰符】 必须大于子类中方法重写的访问范围 (同时父类的方法的访问修饰符不能为private)
class Person{
    public name;
    public age;
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
    eating(){
        console.log(`${this.name} eating`)
    }
}
class Student extends Person {
    public grade;
    constructor(name:string,age:number,grade:number){
        super(name,age)
        this.grade = grade
    }
    study(){
        console.log(`${this.name} Student grade${this.grade} eating`)
    }
    eating(): void {
        super.eating()
        console.log(`grade${this.grade}`)
    }
}
let stu = new Student('ye',12,3)
stu.eating()