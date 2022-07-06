function isString(value: any): value is string {
    return typeof value === 'string';
}
function getValue(value: unknown): void {
    if (isString(value)) {
        console.log(value.toUpperCase())
    } else {
        console.log('not a string')
    }
}
getValue('hello')