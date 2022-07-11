function sorted(data: string, count?: number): string
function sorted<T>(data: T, count?: number): T[]
function sorted(data: any, count: number = 5): any {
    if (typeof data === 'string') {
        return data
    } else {
        return new Array(count).fill(data)
    }
}

const a = sorted<number>(1)
console.log(a)
export { }