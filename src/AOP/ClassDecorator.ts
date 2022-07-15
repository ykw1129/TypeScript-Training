function FirstClassDecorator(targetClass: any) {
    let targetClassObj = new targetClass();
    console.log(targetClass.name)
}

@FirstClassDecorator
class CustomerService {
    name: string = "下单"
    constructor() {
    }
    buy() {
        console.log(this.name + "购买")
    }
    placeOrder() {
        console.log(this.name + "下单购买")
    }
}