import wepy from 'wepy'

export default class mData extends wepy.mixin {
  data = {
  }
  methods = {
    getNow () {
      // this.date = (new Date()).format("YYYY-MM-dd")
      console.log('mixin method tap')
    }
  }

  onShow() {
    // console.log('now:'+this.date)
  }

  onLoad() {
    // console.log('mixin onLoad：'+this.date)
  }
}
