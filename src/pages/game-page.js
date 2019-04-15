import {scene} from '../scene/index.js'
import Cuboid from '../block/cuboid.js'
import Cylinder from '../block/cylinder.js'
import ground from '../objects/ground.js'
import arrow from '../objects/arrow.js'

export default class GamePage{
  constructor(callbacks){
    this.callbacks=callbacks
  }

  init(){
    console.log('game page init')
    this.scene=scene
    this.ground=ground
    this.arrow=arrow
    this.scene.init()
    this.ground.init()
    this.arrow.init()

    this.addInitBlock()
    this.addGround()
    this.addArrow()
    this.render()
    
  }

  render(){
    this.scene.render()
    if(this.arrow){
      this.arrow.update()
    }
    requestAnimationFrame(this.render.bind(this))
  }

  addInitBlock(){
    console.log('addInitBlock')
    const cuboidBlock=new Cuboid(-15,0,0)
    const cylinderBlock=new Cylinder(23,0,0)
    this.scene.instance.add(cuboidBlock.instance)
    this.scene.instance.add(cylinderBlock.instance)
  }

  addGround(){
    console.log('add ground')
    this.scene.instance.add(this.ground.instance)
  }

  addArrow(){
    console.log('add arrow')
    this.scene.instance.add(this.arrow.obj)
		this.arrow.showup()
  }

  restart(){
    console.log('game restart')
  }
  show(){
    
  }
  hide(){
    
  }
}