import console from "console";

function loginInfoDecorator<T extends { new(...args: any): any }>(targetClass: T) {
    class LoginSonClass extends targetClass {
        constructor(...args: any) {
            super(...args);
            console.log("日志信息")
        }
    }
    return LoginSonClass;
}
@loginInfoDecorator
class Test {
    name!: string
    age!: number
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
