import Food from "./food";
import ScorePanel from "./scorePanel";
import Snake from "./snake";

//游戏控制器
class gameControl{
    snake:Snake  //蛇
    food : Food  //食物
    scorePanel : ScorePanel  //记分牌
    direction :string =""  //保存蛇的移动方向（按键的方向）
    isLive = true //记录游戏是否结束
    constructor(){
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
    }
    //游戏初始化
    init(){
        document.addEventListener("keydown",this.keyDownHandler.bind(this))
        //调用run 方法使蛇移动
        this.run()
    }

  
    //鼠标按下时，调用的函数
    keyDownHandler(event:KeyboardEvent){
        this.direction = event.key 
    }

    //创建 控制蛇移动的方法 
    run(){
        
        let X = this.snake.X
        let Y = this.snake.Y
        switch (this.direction) {
            case "ArrowUp": Y -= 10
                break
            case "ArrowDown": Y += 10
                break
            case "ArrowLeft": X -= 10
                break
            case "ArrowRight": X += 10
                break
        }

        //判断蛇是否吃到食物
        this.checkEat(X, Y)

        try{
            this.snake.X = X
            this.snake.Y = Y
        }catch(e){
            //进入catch　说明　抛出异常
            alert((e as Error).message + "!GAME OVER")
            //改变游戏状态
            this.isLive = false
        }

        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level-1)*30);  
    } 
    //定义蛇是否吃到食物
    checkEat(X:number,Y:number){
        if(X ===this.food.X && Y === this.food.Y){
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }
}
export default gameControl