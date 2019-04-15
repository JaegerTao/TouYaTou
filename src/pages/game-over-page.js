export default class GameOverPage{
  constructor(callbacks){
    this.callbacks=callbacks
  }

  init(options){
    console.log('game over page init')
    this.initGameoverCanvas(options)
  }
  
  initGameoverCanvas(options){
    
  }

  show(){
    console.log('game over page show')
    this.obj.visible=true
  }
  hide(){
    this.obj.visible=false
  }
}