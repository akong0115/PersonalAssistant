// pages/main/mark/mark.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    time:{
      type:String,
      value: "2018年6月10日",
      observer: function (newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
    },
    word:{
      type:String,
      value:`今天爆屏事件：
       顺丰公司值得我们深思和学习:上合峰会期间，青岛地区快递三轮被禁上路，大部分快递公司已处于休假模式，而顺丰坚持青岛五区徒步送货模式！你做不到的，别人却做到了，这就是成功的秘诀！
      你难，其实别人也难。老天是公平的，天天谈成功谈理想，不如动手解决眼下的难题，逢山开路，遇水架桥。办法总比困难多，把工作做到极致，这就是工作态度，也是体现责任，更能反映你的能力！
      人与人之间之所大不同，就在此能找到答案。`
    },
    imgs: {
      type:Array,
      value:[ 
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529254531967&di=50bddeee84686f2399b514d852104015&imgtype=0&src=http%3A%2F%2Fmp0.qiyipic.com%2Fimage%2F20180510%2F71%2F5b%2Fppu_267876420102_pp_601_300_300.jpg',  
       'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529254715489&di=422bc5073da2ea9f18b9ef5f5453d7ba&imgtype=0&src=http%3A%2F%2Fmp3.qiyipic.com%2Fimage%2F20180510%2F5a%2F45%2Fppu_267926920102_pp_601_300_300.jpg',  
       'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529254531967&di=3a00db87c84e4eb3f6ed8b8100b0749e&imgtype=0&src=http%3A%2F%2Fmp1.qiyipic.com%2Fimage%2F20180412%2F90%2Fd0%2Fppu_208859430102_pp_601_m1_300_300.jpg',  
       'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529254531965&di=ba5559028f42e929acb4fd202cf087b8&imgtype=0&src=http%3A%2F%2Fmp0.qiyipic.com%2Fimage%2F20180513%2F04%2F8b%2Fppu_274015700102_pp_601_300_300.jpg' ,
       'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529254531964&di=43ee62f35dec6e7824c6115c3f0d64b9&imgtype=0&src=http%3A%2F%2F09.imgmini.eastday.com%2Fmobile%2F20180525%2F20180525003420_1b0026224e2dde07ac90576a83e0cb8b_1.jpeg',
       'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529254531962&di=1c1a9616bcd521bfb06bb823b6372f11&imgtype=0&src=http%3A%2F%2F00.imgmini.eastday.com%2Fmobile%2F20180515%2F20180515154449_8e2d24e312b8cb99d9c30a46de493f45_1.jpeg',
       'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529254531954&di=dd8f4f9b71a23ee109af5811c622256f&imgtype=0&src=http%3A%2F%2Fqimg.hxnews.com%2F2018%2F0330%2F1522394821960.jpeg',
       'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529254531953&di=2406a1ff71a23cb7a578cb13ce18e470&imgtype=0&src=http%3A%2F%2Fmp0.qiyipic.com%2Fimage%2F20180126%2Fee%2Fd5%2Fh_1156070253_h_601_400_400.jpg',
       'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529254675982&di=bacab1aa4cf9075df20c0b47891bbf90&imgtype=0&src=http%3A%2F%2Fmp3.qiyipic.com%2Fimage%2F20180501%2F59%2F4b%2Fppu_252224680102_pp_601_m1_300_300.jpg'
    ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showMore:false,
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
    }
  }
})
