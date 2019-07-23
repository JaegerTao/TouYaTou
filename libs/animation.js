/**
 * @description animation library
 * @detail requesAnimationFrame
 * 1.duration 动画间隔
 * 2.fromP 动画起始信息,起点
 * 3.to 衔接或结束信息，终点 fromP和to中的拥有的属性相同，值不同
 * 4.type 动画类型
 */

import Tween from './tween.js' 

const customAnimation = exports.customAnimation={}

customAnimation.to = function (duration, fromP, to, type, callback) {
  //做动画切换、延迟等
	console.log('customAnimation.to')
  for (let prop in fromP){
		console.log('for in');
		TweenAnimation(fromP[prop], to[prop], duration, type);
  }
}

const TweenAnimation = exports.TweenAnimation = function TweenAnimation(fromP , to , duration , type, callback){
  //数学模型
	console.log('TweenAnimation')
  const frameCount=duration*1000/17;  //duration unit second 接受秒，转化为毫秒
  let start=-1

  const startTime=Date.now()
  let lastTime=Date.now()

  const tweenFn=Tween[type]//维护方法，拿到type
  
  const options={
    callback:function(){},//给一个默认callback，什么也不做
    type:'Linear',
    duration:300
  }
	
	if(callback){
		options.callback = callback
	}
	if(type){
		options.type = type
	}
	if(duration){
		options.duration = duration
	}

  const step = function(step){
    const currentTime=Date.now()//获取当前时间
    const interval=currentTime-lastTime//得到上次到这次间隔时间

    if(interval<=17){//如果间隔小于17毫秒
      start++
    }else{
      const _start=Math.floor(interval/17)
      start=start+_start //需要跳帧
    }
		
		console.log(interval,start,frameCount)
		
    const value = tweenFn(start, fromP, to - fromP, frameCount)

    if(start<=frameCount){
      //动画继续
      options.callback(value);
      requestAnimationFrame(step)
    }else{
      //动画结束
      options.callback(to,true);
    }
  }
  step()
}

