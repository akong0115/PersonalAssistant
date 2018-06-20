// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"",
    password:""
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
  setPhone:function(e){
    this.setData({
      phone: e.detail.value
    })
  },
  setPwd:function(e){
    this.setData({
      password: e.detail.value
    })
  },
  login:function(e){
    console.log('login')
    var phone=this.data.phone;
    var password=this.data.password;
    wx.request({
      url: `http://tp5.com/personaluser/${phone}/${password}`, 
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        // console.log(res.data)
        if(res.data===null){
          wx.showToast({
            title: '用户不存在',
            icon:'none'
          })
        }else{
          if(res.statusCode===404){
            wx.showToast({
              title: '用户名密码不能为空',
              icon:'none'
            })
          }else{
            if(res.data.status==='ok'){
              wx.navigateTo({
                url: '../main/main'
              })
            }else{
              wx.showToast({
                title: '用户名、密码错误',
                icon: 'none'
              })
            }
          }
        }
      }
    })
  },
  register:function(e){
    wx.navigateTo({
      url: '../register/register',
    })
  }
})