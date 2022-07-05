type type_ChartParam = {
    width?: number,
    height: number,
    radius?: number
}
class Square {
    public width!: number;
    public height!: number;
    constructor(width_: number, height_: number)//重载签名
    constructor(obj: type_ChartParam)//重载签名
    constructor(objOrWidth_: any,height_:number = 0){
        if(typeof objOrWidth_ === 'object'){
            this.width = objOrWidth_.width
            this.height = objOrWidth_.height
        }else{
            this.width = objOrWidth_
            this.height = height_
        }

    }
    public getArea(): number {
        return this.height * this.width
    }
}