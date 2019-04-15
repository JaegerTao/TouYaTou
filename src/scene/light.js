/**
 * 光线
 */
class Light {
  constructor(){
    this.instances={}
  }

  init(){
    const ambientLight=new THREE.AmbientLight(0xffffff,0.8)//环境光，颜色、光强
    const shadowLight = new THREE.DirectionalLight(0xffffff,0.3)//平行光，用于产生阴影
    shadowLight.position.set(10,30,20)
    shadowLight.castShadow=true//光源启用阴影

    //定义平行光的朝向的地方
    var basicMaterial=new THREE.MeshBasicMaterial({color:0x000000})
    this.shadowTarget=new THREE.Mesh(new THREE.PlaneGeometry(0.1,0.1))
    this.shadowTarget.visible=false
    this.shadowTarget.name='shadowTarget'
  
    shadowLight.target=this.shadowTarget//设置平行光朝向
    //设置光源阴影对应的camera的属性
    shadowLight.shadow.camera.near = 0.5
    shadowLight.shadow.camera.far = 500
    shadowLight.shadow.camera.left = -100
    shadowLight.shadow.camera.right = 100
    shadowLight.shadow.camera.top = 100
    shadowLight.shadow.camera.bottom = -100
    shadowLight.shadow.mapSize.near = 1024
    shadowLight.shadow.mapSize.near = 1024

    this.instances.ambientLight=ambientLight
    this.instances.shadowLight=shadowLight
    this.instances.shadowTarget=this.shadowTarget
  }
}

export default new Light()