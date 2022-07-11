class Person {
    name: string
    constructor(name: string) {
        this.name = name
    }
}
type PersonConstructor = new (...arg: any) => any
const createInstance = (Constructor: { new(...arg: any): any }) => {
    return new Person(Constructor.name)
}
export { }