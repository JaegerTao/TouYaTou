/**
 * 数学模型
 */

const Tween={
	Linear:function Linear(currentFrame, fromP , range , totalFrameCount){
		//线性函数
		return currentFrame * range / totalFrameCount + fromP
	}
}

export default Tween