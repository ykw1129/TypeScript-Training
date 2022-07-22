interface Goods {
    id: number
    name: string
    price: number
}
let goodList: Goods[] = [
    {
        id: 3,
        name: "苹果",
        price: 10
        ,
    },
    {
        id: 4,
        name: "香蕉",
        price: 20
        ,
    }, {
        id: 5,
        name: "草莓",
        price: 30
        ,
    }
]
type Record<T> = {
    [P in keyof any]: T;
};
type resultGoodsType = Record<Goods>
let goodRecord: Record<Goods> = {}
goodList.forEach((goods) => {
    goodRecord[goods.id] = goods
})
console.log(goodRecord)
export { }
type Person = {
    name: string
    age?: number
    des: string
}
type a = Exclude<keyof Person, "des">
type b = Partial<Person>
type p = Pick<Person, Exclude<keyof Person, "des">>
type PersonRequired = Required<Person>
type PersonType = Pick<Person, 'name'>