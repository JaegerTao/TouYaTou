import blockConf from '../../conf/block-conf.js'

export default class BaseBlock{
  constructor(type){
    this.type=type//cuboid|cylindr
    this.height=blockConf.height
    this.width=blockConf.width
  }
}