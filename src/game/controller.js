import gameView from './view.js'
import gameModel from './model.js'

class GameController{
  constructor(){
    this.gameView=gameView
    this.gameModel=gameModel
    this.gameModel.stageChanged.attach((sender,args)=>{
      const stageName=args.stage
      switch(stageName){
        case 'game-over'://通过传参数即可将页面场景调换
          this.gameView.showGameOverPage()
          break
        case 'game':
          this.gameView.showGamePage()
          break
        default:
      }
    })
  }

 

  initPages(){
    const gamePageCallbacks={//回调函数参数，可进行上下层通信
      //showGamOverPage:this.showGamOverPage
      showGameOverPage:()=>{
        this.gameModel.setStage('game-over')
      }
    }
    const gameOverPageCallbacks=()=>{
      //gameReastart:this.restartGame
      this.gameModel.setStage('game')
    }

    this.gameView.initGamePage(gamePageCallbacks)
    this.gameView.initGameOverPage(gameOverPageCallbacks)
  }
}

export default new GameController()