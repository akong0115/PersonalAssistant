// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"",
    password1:"",
    password2:"",
    imgSrc:'',
    isAddHead:false,
    sendCodeText:"发送验证码"
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
  
  },
  setPwd1:function(e){
    this.setData({
      password1:e.detail.value
    })
  },
  setPhone:function(e){
    this.setData({
      phone:e.detail.value
    })
  },
  addHead:function(e){
    var _this=this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        _this.setData({
          imgSrc:tempFilePaths
        },function(){
          _this.setData({
            isAddHead:true
          })
        })
        
      }
    })
  },
  sendCode:function(e){
    this.setData({
      sendCodeText:"验证码已发送"
    })
  }
})