type state = {
    name: string,
    value: string
}
export default class Store {
    public state: state[] = []
    static store: Store = new Store()
    private constructor() {
        console.log()
    }
    public getAllItem() {
        return this.state
    }
    public getItem(key: string) {
        return this.state.find(item => key === item.name)?.value
    }
    public setItem(key: string, value: string) {
        let isExist = this.state.find(item => key === item.name)
        if (!isExist) {
            this.state.push({ name: key, value })
        } else {
            let index = this.state.findIndex(item => key === item.name)
            this.state[index].value = value
        }
    }
}