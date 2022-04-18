
type state = {
    name:string,
    value:string
}
export default class Store {
    public state:state[]=[]
    static store:Store
    private constructor(){
        console.log('initialize')
    }
    public static getInstance(){
        if(!this.store){
            this.store = new Store()
        }
        return this.store
    }
    public getAllItem (){
        return this.state
    }
    public getItem(key:string){
        return this.state.find(item=>key===item.name)?.value
    }
    public setItem(key:string,value:string){
        let isExist = this.state.find(item => key === item.name)
        if(!isExist){
            this.state.push({name:key,value})
        }else{
            let index = this.state.findIndex(item => key === item.name)
            this.state[index].value = value
        }
    }
}
const store = Store.getInstance()
store.setItem('say','hello')
console.log(store.getItem('a'))