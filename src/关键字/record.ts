/*
 * @Author: Killian killian@8bsolutions.cn
 * @Date: 2022-07-18 08:43:27
 * @LastEditors: Killian killian@8bsolutions.cn
 * @LastEditTime: 2022-07-21 10:56:06
 * @FilePath: \typescript-training\record.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
export { }