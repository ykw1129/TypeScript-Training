const arrayList = [10, 20, 'world'] as const
// 数组的子项为只读
// arrayList[0] = 'hello'
console.log(arrayList);

function showArr(arr: readonly any[]) {
    // 类型“readonly any[]”中的索引签名仅允许读取
    // arr[0] = 100;
}