// pages/main/mark/mark.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    time:{
      type:String,
    },
    word:{
      type:String,
    },
    imgs: {
      type:Array,
    },
    location:{
      type:String
    },
    upload:{
      type:Number
    },
    tags:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showMore:false,
  },
  attached:function(){
    console.log('attach');
    console.log(this.properties.markData);
  },
  /**
   * 组件的方法列表
   */
  methods: {
    showAll:function(e){
      if(this.data.showMore===false){
      this.setData({
        showMore:true
      })
      }else{
        this.setData({
          showMore:false
        })
      }
    },
    deleteWord:function(){
      console.log('delete');
    },
    showImg:function(event){
      var src = event.currentTarget.dataset.src;//获取data-src
      var imgList = event.currentTarget.dataset.list;//获取data-list
      console.log(src);
      console.log(imgList);
      //图片预览
      wx.previewImage({
        current: src, // 当前显示图片的http链接
        urls: imgList // 需要预览的图片http链接列表
      })
    },
    edit:function(e){
      // console.log('long');
      wx.navigateTo({
        url: '../edit/edit',
      })
    },
    containerTap: function (res) {
      var that = this
      var x = res.touches[0].pageX;
      var y = res.touches[0].pageY + 85;
      this.setData({
        rippleStyle: ''
      });
      setTimeout(function () {
        that.setData({
          rippleStyle: 'top:' + y + 'px;left:' + x + 'px;-webkit-animation: ripple 0.4s linear;animation:ripple 0.4s linear;'
        });
      }, 200)
    },  
  }
})
