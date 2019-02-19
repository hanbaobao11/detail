// pages/load/load.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgurl: '../img/1.jpg',
    tmpName: undefined,
    tmpPassword: undefined,
    username: '',
    password: ''

  },
  getName: function(e) {
    // console.log(e)
    this.setData({
      tmpName: e.detail.value
    })
  },
  getPassword: function(e) {
    // console.log(e)
    this.setData({
      tmpPassword: e.detail.value
    })
  },
  setInfor: function() {
    if (this.data.tmpName && this.data.tmpPassword) {
      if (this.data.tmpName == this.data.username) {
        wx.showToast({
          title: '用户名重复',
          icon: 'none'
        })
      } else {
        this.setData({
          username: this.data.tmpName,
          password: this.data.tmpPassword
        })
        wx.showToast({
          title: '你已注册成功',
          icon: 'none',
          duration: 1600,
          success: () => {
            this.setData({
              bgurl: '../img/3.jpg'
            })

          }
        })
      }
    }else{
      wx.showToast({
        title: '请输入完整信息',
        icon:"none"
      })
    }
  },
  loadForm:function(e){
    console.log(e)
    if(this.data.username!==undefined||this.data.password!==undefined){
        console.log(111)
      if(this.data.username==e.detail.value.username&&this.data.password==e.detail.value.password){
        wx.showToast({
          title: '登录成功',
          icon:'none',
          success:()=>{
            wx.setStorage({
              key: 'username',
              data: 'this.data.username',
              success:()=>{
                console.log('本地存储用户名成功')
              }
            });
            wx.setStorage({
              key: 'password',
              data: 'this.data.password',
              success:function(e){
                console.log(e,'本地存储密码成功')
                }
          })
          wx.switchTab({
            url: "../index/index",
          })
          }
        })


      }else{
        wx.showToast({
          title: '密码或用户名不对',
          icon:'none'
        })
      }
    }else{
      wx.showToast({
        title: '请输入信息',
        icon:'none'
      })
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})