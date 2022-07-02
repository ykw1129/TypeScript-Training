class Per{
    address="123"
    do(){

    }
}
class Stu{

}
let people = new Per()
// let result = people as Stu; //类型断言
let result = <Stu>people //类型转换