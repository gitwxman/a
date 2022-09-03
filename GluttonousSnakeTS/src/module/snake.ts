
//蛇身
class snake {
    head:HTMLElement //蛇头
    bodies:HTMLCollectionOf<HTMLElement>; //蛇的身体（包括蛇头）
    element:HTMLElement; //蛇的容器
    constructor(){
        this.element = document.querySelector(".snake")!
        this.head = document.querySelector(".snake>div")!
        this.bodies = this.element.getElementsByTagName("div")
    }
    //读取蛇头的坐标
    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }
    //设置蛇头的坐标
    set X(value:number){

        //如果新值和旧值相同 则退出
        if(this.X === value) return
        
        if(value <0 || value > this.element.offsetWidth - 10){
            throw new Error("蛇撞墙了") 
        }
        // 修改X时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
        if(this.bodies[1] && this.bodies[1].offsetLeft === value){
            //如果发生了掉头，让蛇反方向继续移动
            if(value >this.X){
                //如果新值value 大于旧值X，则说明蛇在向左走，应该使蛇继续向左走
                value = this.X -10
            }else{
                value = this.X + 10
            }
        
        }
        //设置蛇身的移动
        this.moveBody()
        //设置蛇头的位置
        this.head.style.left = value +"px"
        //检测有没有撞到自己
        this.checkHeadBody()
    }
    set Y(value: number){

        if (this.Y === value) return

        if (value < 0 || value > this.element.offsetWidth - 10) {
            throw new Error("蛇撞墙了")
        }

        if (this.bodies[1] && this.bodies[1].offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10
            } else {
                value = this.Y + 10
            }
        }

        this.moveBody()
        this.head.style.top = value + "px"
        //检测有没有撞到自己
        this.checkHeadBody()

    }
    //增加蛇身体的方法
    addBody(){
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }

    //添加蛇身体的方法
    moveBody(){
        for (let i=this.bodies.length-1; i>0; i--){
            //获取前一个身体的位置
            let X = this.bodies[i-1].offsetLeft
            let Y = this.bodies[i-1].offsetTop
            //将值设置到当前身体上
            this.bodies[i].style.left = X +"px"
            this.bodies[i].style.top = Y +"px"
        }
    }

    //用来检测蛇撞到自己的方法
    checkHeadBody(){
        for(let i=4 ; i<this.bodies.length;i++){
            if (this.X === this.bodies[i].offsetLeft && this.Y === this.bodies[i].offsetTop ){
                //进入判断说明 蛇头撞到了身体
                throw new Error("撞到自己了")
            }
        }
    }
}
export default snake