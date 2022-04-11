type type_ChartParam = {
    width?:number,
    height: number,
    radius?: number
}
class Square {
    public width!: number;
    public height!: number;
    public getArea():number {
        return this.height*this.width
    }
}