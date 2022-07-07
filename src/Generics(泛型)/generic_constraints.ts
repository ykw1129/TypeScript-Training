class Container<T extends object> {
    t!: T
    show() {
        console.log(this.t)
    }
}
const arr = new Container<{}>();
export { }