import { customAnimation } from '../../libs/animation.js'
import arrowConf from '../../conf/arrow-conf.js'
import blockConf from '../../conf/block-conf.js'

class Arrow{
  constructor(){

  }

  init(){
    this.obj=new THREE.Object3D()//Arrow整体
    this.obj.name='arrow'
    this.obj.position.set(arrowConf.initPosition.x, arrowConf.initPosition.y+20, arrowConf.initPosition.z)
    this.obj.receiveShadow = true
    this.obj.castShadow = true

    this.loader=new THREE.TextureLoader()
    this.arrow=new THREE.Object3D()//Arrow

    const specularTexture = this.loader.load('/game/res/imgs/logo2.png')//加纹理的相对路径是从game文件开始的
    const specularMaterial=new THREE.MeshBasicMaterial({
      map:specularTexture//高光材质
    })//初始化材质渲染
    const bodyTexture=this.loader.load('/game/res/imgs/sky.jpg')
    const bodyMaterial=new THREE.MeshBasicMaterial({
      map:bodyTexture
    })

    this.head=new THREE.Mesh(
      new THREE.ConeGeometry(arrowConf.headRadius,6,4,1,false),
      specularMaterial
    )
    this.head.position.y=arrowConf.bodyLength/2 //设置箭头位置

    this.body=new THREE.Mesh(
      new THREE.CylinderGeometry(arrowConf.headRadius/3, arrowConf.headRadius/3,arrowConf.bodyLength,32),
      bodyMaterial
    )

    this.bottom=new THREE.Mesh(
      new THREE.ConeGeometry(arrowConf.headRadius, 4, 5, 1, false),
      specularMaterial
    )
    this.bottom.position.y=-arrowConf.bodyLength/2 //设置箭尾的位置

    this.obj.rotation.z=-0.5*Math.PI //将箭头方向转向x轴正方向（调整z轴旋转角度）

    this.arrow.add(this.head)
    this.arrow.add(this.body)
    this.arrow.add(this.bottom)
    this.obj.add(this.arrow)
  }

  update(){
    this.head.rotation.y += 0.06
		this.body.rotation.y += 0.06
    this.bottom.rotation.y += 0.06
  }
	
	showup(){
		console.log('showup animation')
		customAnimation.to(5,this.obj.position,{
			x:arrowConf.initPosition.x,
			y:arrowConf.initPosition.y+blockConf.height,
			z:arrowConf.initPosition.z
		},'Linear')
	}
		
}

export default new Arrow()