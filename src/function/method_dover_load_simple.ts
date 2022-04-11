
const data: Message[] = [{ id: 1, message: 'no one', type: 'image' }, { id: 1, message: 'ok', type: 'audio' }];
type MessageType = 'audio' | 'image' | string
type Message = {
    id: number,
    message: string,
    type: MessageType
}
// 函数重载
function getMessage(id: number): Message
function getMessage(msgType: MessageType, constant?: number): Message[]
function getMessage(payload: number | MessageType, constant:number=1): Message | Message[] | undefined {
    if (typeof payload === "number") {
        return data.find((_: Message) => _.id === payload)
    } else {
        return data.filter((_) => _.type === payload).splice(0,constant)
    }
}
console.log(getMessage('audio'))