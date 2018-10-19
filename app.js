//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    goodsList:[
      {
        id:1,
        goodsType:"水果",
        goodsInfo:[
          {
            id:11,
            goodsName:"香蕉",
            price:3
          }
        ]
      },
      {
        id: 2,
        goodsType: "蔬菜",
        goodsInfo: [
          {
            id:22,
            goodsName:"菜花",
            price:2
          }
        ]
      },
      {
        id: 3,
        goodsType: "零食",
        goodsInfo: [
          {
            id:33,
            goodsName:"薯片",
            price:5
          }
        ]
      }
    ]
  }
})