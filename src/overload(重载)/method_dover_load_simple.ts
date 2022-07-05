class ArrayList{
    constructor( public element:Array<object>){
    }
    get(index:number){
        return this.element[index]
    }
    show(){
        this.element.forEach((ele)=>{
            console.log(ele)
        })
    }
    remove(value:number):number
    remove(value:object):object
    remove(value:number|object):number|object{
       this.element =  this.element.filter((ele,index)=>{
           if(typeof value === "number"){
               return value!==index
           }else{
               return value!==ele
           }
       })
       return value
    }
}
let stuOne = {name:"wang's",age:30}
let stuTwo = {name:"jack",age:20}
let stuThree = {name:"tom",age:10}
let arr = new ArrayList([stuOne,stuTwo,stuThree]);
arr.show()