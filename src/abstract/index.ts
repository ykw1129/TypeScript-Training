// 比较宽泛的类可以定义为抽象类 比如Person Flower Animal
// 抽象类不能被实例化
// 抽象类可以具有一个到多个抽象方法
// 什么时候可以定为抽象方法呢？ 当你觉得这个方法没有必要写任何代码的时候就可以将它设为抽象方法
// 抽象类可以包括抽象方法也可以包括具体方法
// 好处1、提供统一名称的抽象方法，提高代码可维护性
// 好处2、防止实例化一个实例化毫无意义的类
abstract class Flower {
    public abstract eat(): void;
}
class Leaf extends Flower {
    public eat(): void {
        console.log('no')
    }

}