function PropertyInterceptor(params: string) {
    return (target: any, attrname: string | symbol) => {
        console.log(attrname, params)
    }
}

class Person {
    @PropertyInterceptor("test")
    public name: string = "John";
    constructor() {
    }
}
let person = new Person();
export { }