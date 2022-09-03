
// 等级 加分
class ScorePanel {
    score =0
    level =1
    scoreEle:HTMLElement
    levelEle:HTMLElement
    maxLevel:number  //限制等级的上限
    upScore:number  //设置每多少分升级
    constructor(maxLevel=10,upScore=10){
        this.scoreEle = document.querySelector(".score-panel .score")!
        this.levelEle = document.querySelector(".score-panel .level")!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }
    //设置一个加分的方法  
    addScore(){
        this.scoreEle.innerHTML = ++this.score + ""

        //判断分数每10分的时候升一级
        if(this.score % this.upScore === 0){
            this.levelup()
        }
    }
    //设置等级提升的方法
    levelup(){
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level + ""
        }
    }
}

//检测代码
// const scorePanel = new ScorePanel(50,1000)
// for(let i=0;i<600;i++){
//     scorePanel.addScore()
// }

export default ScorePanel
