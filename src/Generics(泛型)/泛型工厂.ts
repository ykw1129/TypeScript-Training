class Person {
    name: string
    constructor(name: string) {
        this.name = name
    }
}
type PersonConstructor = new (...arg: any) => any
const createInstance = <T>(Constructor: { new(...arg: any): T }) => {
    return new Person(Constructor.name)
}
export { }