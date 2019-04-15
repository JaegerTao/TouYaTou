/**
 *地面,用于接收阴影
 */
class Ground{
  constructor(){
    console.log('Ground constructed')
  }

  init(){
    const groundGeometry=new THREE.PlaneGeometry(200,200)
    const material=new THREE.ShadowMaterial({
      transparent:true,
      color:0x000000,
      opacity:0.3//设置transpar为true时才能设置透明度
    })

    this.instance=new THREE.Mesh(groundGeometry,material)
    this.instance.rotation.x=-Math.PI/2
    this.instance.position.y=-16/3.2

    this.instance.receiveShadow = true//可接受光源
  }
}

export default new Ground()