type fun1 = (one: string, two: number) => string
type fun2 = (one: string) => string
// 参数少继承参数多的 且第一个参数类型一样
type fun3 = fun2 extends fun1 ? fun2 : never
type fun4 = Extract<fun2, fun1>
export { }