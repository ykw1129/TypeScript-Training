interface Customer {
    name: string,
    id: number
}

type customerFuncType = (customer: Customer) => string
type inferType<T> = T extends (params: string) => infer P ? P : T
type resultType = inferType<customerFuncType>
type result = inferType<(name: any) => undefined>
export { }
// infer只能出现在参数和返回值中