// pages/detail/detail.js
var wxParse=require('../../wxParse/wxParse.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    art:{},
    content:'',
    id:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx:wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/'+options.id,
   
      header: {
        'Content-Type':'application/json'
      },
     
      success: function(res) {
        console.log(res)
        that.setData({
          'art':res.data,
          'content':wxParse.wxParse('content','html',res.data.body,that,0)
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  
    

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