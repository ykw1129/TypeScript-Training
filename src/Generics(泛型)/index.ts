// 特点一 定义时不明确使用时必须明确成某种数据类型的数据类型【泛型的宽泛】
// 特点二 编译期间进行数据类型安全检查的数据类型【泛型的严谨】
interface List<T> {
    add(ele: T): void;
    get(index: number): T;
    size(): number;
}
class ArrayList<T> implements List<T> {
    public array: Array<T>
    constructor() {
        this.array = []
    }
    public index: number = 0;
    add(ele: T): void {
        this.array[this.index] = ele
    }
    get(index: number): T {
        return this.array[index]
    }
    size(): number {
        return this.index ? this.index : 0;
    }

}
//
// 中文排序
function sortChinese<T extends string>(arr: Array<T>): T[] {
    return arr.sort(function (firstNum, secondNum) {
        return firstNum.localeCompare(secondNum, "zh-CN")
    })
}
export { }