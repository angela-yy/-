// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"赵小六",
    age:18
  },
  goGoods(){
    wx.navigateTo({
      url: '../goods/goods',
    })
  },
  changeAge(){
    this.setData({
      age:28
    })
  },
  tapout(e){
    console.log("我在最外层",e)
  },
  tapmiddle(e){
    console.log("我在中间",e)
  },
  tapinner(e){
    console.log("我在最内层",e)
  },
  catchlongtap(){
      console.log("我是长按")
  },
  catchtouchstart() {
    console.log("我是开始触摸")
  },
  catchtouchmove() {
    console.log("我是触摸移动")
  },
  catchtouchend() {
    console.log("我是触摸结束")
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})