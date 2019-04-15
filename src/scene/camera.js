import sceneConf from '../../conf/scene-conf.js'

class Camera{
  //设置相机
  constructor(){
    this.instance=null//当前Camera的实例，初始值设为null
  }

//初始化Camera
  init(){
    const aspect=window.innerHeight/window.innerWidth
    this.instance = new THREE.OrthographicCamera(-sceneConf.frustumSize, sceneConf.frustumSize, sceneConf.frustumSize * aspect, -sceneConf.frustumSize * aspect, -100, 85)
    this.instance.position.set(15,10,0)
    this.target=new THREE.Vector3(25,0,0)//相机望向的方向
    this.instance.lookAt(this.target)
  }
}

export default new Camera()