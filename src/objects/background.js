/**
 * 背景
 */
import sceneConf from '../../conf/scene-conf.js'

class Background{
  constructor(){
    console.log('Background constructed')
  }

  init(){
    const geometry=new THREE.PlaneGeometry(sceneConf.frustumSize*2,window.innerHeight/window.innerWidth*sceneConf.frustumSize*2)
    const material=new THREE.MeshBasicMaterial({
      color:0xd7dbe6,
      transparent:true,
      opacity:1
    })
    this.instance=new THREE.Mesh(geometry,material)
  }
}

export default new Background()