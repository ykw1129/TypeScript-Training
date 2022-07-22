function MethodInterceptor(params: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            console.log("初始拦截")
            originalMethod.call(this, args)
            console.log("结束拦截")
        }
    }
}

class Person {
    constructor() {
    }
    @MethodInterceptor('hello')
    test() {
        console.log("运行")
    }
}
let person = new Person();
person.test()
export { }