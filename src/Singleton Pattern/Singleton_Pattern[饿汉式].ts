export default class Store {
    static store: Store
    private constructor() {
        console.log()
    }
    public static getInstance() {
        if (!this.store) {
            this.store = new Store()
        }
        return this.store
    }
}