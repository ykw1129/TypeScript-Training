let [username, no, ...rest]: [string, number, ...any[]] = ["wangwu", 23, 'hello boy']
// 可变元组
// let [username, no, ...rest]: [name_: string, age_: number, ...rest: any[]] = ["wangwu", 23, 'hello boy']
// 加上元组标签
// let [username, no, ...rest]: [name_: string, age_: number, ...rest: any[], last_: string] = ["wangwu", 23, 'hello boy', 'boy']
// readonly 和 as const 都是表示固定不变的，包括数组和元组的每一个元素