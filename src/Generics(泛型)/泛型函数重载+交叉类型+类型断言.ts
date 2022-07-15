function cross<T extends object, U extends object>(obj: T, payload: U): T & U
function cross<T extends object, U extends object, V extends object>(obj: T, payload: U, load: V): T & U & V
function cross<T extends object, U extends object, V extends object>(obj: T, payload: U, load?: V) {
    let curObj = {}
    let combine = obj as T & U
    if (load) {
        let curObj = {}
        // 空对象可以进一步被断言成其他类型
        let combine = obj as T & U & V
    }
    return combine
}
type Cross<T> = Extract<T, object>
function cross1<T, U>(obj: Cross<T>, payload: Cross<U>): T & U
function cross1<T, U, V>(obj: Cross<T>, payload: Cross<U>, load: Cross<V>): T & U & V
function cross1<T, U, V>(obj: Cross<T>, payload: Cross<U>, load?: Cross<V>) {
    /*     let curObj = {}
        let combine = obj as T & U
        if (load) {
            let curObj = {}
            // 空对象可以进一步被断言成其他类型
            let combine = obj as T & U & V
        } */
    // return combine
}
export { }