class Food {
    element: HTMLElement
    constructor() {
        this.element = document.querySelector(".food")!
    }
    //定义获取食物x 轴坐标的类
    get X() {
        return this.element.offsetLeft
    }
    get Y() {
        return this.element.offsetTop
    }
    //修改食物的坐标
    change() {
        let left = Math.round(Math.random() * 29) * 10
        let top = Math.round(Math.random() * 29) * 10

        this.element.style.left = left + "px"
        this.element.style.top = top + "px"
    }
}

export default Food

//测试
// const food = new Food()
// console.log(food.X,food.Y);
// food.change()
// console.log(food.X, food.Y);