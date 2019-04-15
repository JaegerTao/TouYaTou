/**
 * model和view相互触发的逻辑：事件绑定
 */
class Event {
  constructor(sender) {
    this._sender = sender
    this._listeners = []//用数组，维护事件的回调函数
  }

  attach(callback) {//将回调函数push到数组中
    this._listeners.push(callback)
  }

  notify(args) {//将当前listener里的回调函数全部触发一遍
    for (let i = 0; i < this._listeners.length; i++) {
      this._listeners[i](this._sender, args)
    }
  }
}

export default Event