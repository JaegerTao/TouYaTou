import BaseBlock from './base.js'

export default class Cuboid extends BaseBlock{
  constructor(x,y,z,width){
    console.log('cuboid constructed')
    super('cuboid')//调用父类构造函数,传入参数 cuboid
    const size=width||this.width
    const geometry = new THREE.CylinderGeometry(size / 2, size / 2, this.height, 120)
    const material=new THREE.MeshPhongMaterial({
      color:0xffffff
    })
    this.instance=new THREE.Mesh(geometry,material)
    
    //接收并能反射光源
    this.instance.receiveShadow=true
    this.instance.castShadow=true
    
    this.instance.name='block'//给mesh设置一个name，方便后期寻找
    this.x=x
    this.y=y
    this.z=z
    this.instance.position.x=this.x
    this.instance.position.y=this.y
    this.instance.position.z=this.z
  }
}