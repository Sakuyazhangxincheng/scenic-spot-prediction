// pages/home/home.js
Page({
  data: {
    fList: [],
    list: [],
    count: 0,
    show: [],
    tabName:"",
    url:"",
    addNew:true,
    newName:"",
    tabCur: 0, //默认选中
    tabs: [{
        name: '头条',
        id: 0
      },
      {
        name: '时尚',
        id: 1
      },
      {
        name: '娱乐',
        id: 2
      },
      {
        name: '教育',
        id: 3
      },
      {
        name: '旅游',
        id: 4
      },
      {
        name: '军事',
        id: 5
      },
      {
        name: '财经',
        id: 6
      },
      {
        name: '游戏',
        id: 8
      }
    ]

  },
  onPullDownRefresh:function(){
    this.setData({
      count:this.data.count+1
    })
    console.log(this.data.count)
    console.log(this.data.list.length)
    
    if(this.data.count>this.data.list.length-1){
      if(this.data.addNew){
        this.getMore()
        this.setData({
          addNew:false,
          count:3
        })  
      }else {
        this.setData({
          count:0,
          show:this.data.list[0]
        })
      }
    }
    this.setData({
      show:this.data.list[this.data.count]
    })
    wx.stopPullDownRefresh()
  },
  onLoad: function (options){
    this.getNews()
  },
  getMore(){
    wx.request({
      url: this.data.url+'11-20.html',
      header: {
       'content-type': 'application/json'
      },
      success: res => {
       //1:在控制台打印一下返回的res.data数据
       console.log(res)
       var test = res.data.replace("artiList(","").slice(0,-1);
       var json = JSON.parse(test);
       console.log(json)
       const data = Object.values(json)
       console.log(data[0])
       //2:在请求接口成功之后，用setData接收数据
       this.setData({
         //第一个data为固定用法，第二个data是json中的data
        fList: this.data.fList.concat(data[0]),
       })
       console.log(this.data.fList)
       this.getrecom()
      }
     })
  },
  getNews() {
    var id = this.data.tabCur
    if(id==0){
      wx.request({
        url: 'https://3g.163.com/touch/reconstruct/article/list/BBM54PGAwangning/0-10.html',
        header: {
         'content-type': 'application/json'
        },
        success: res => {
         //1:在控制台打印一下返回的res.data数据
         console.log(res)
         var test = res.data.replace("artiList(","").slice(0,-1);
         var json = JSON.parse(test);
         console.log(json)
         //2:在请求接口成功之后，用setData接收数据
         this.setData({
           //第一个data为固定用法，第二个data是json中的data
          fList: json.BBM54PGAwangning,
          url: 'https://3g.163.com/touch/reconstruct/article/list/BBM54PGAwangning/',
          newName:'BBM54PGAwangning'
         })
         console.log(this.data.fList)
         this.getrecom()
        }
        
       })

    }else if(id==1){
      wx.request({
        url: 'https://3g.163.com/touch/reconstruct/article/list/BA8F6ICNwangning/0-10.html',
        header: {
         'content-type': 'application/json'
        },
        success: res => {
         //1:在控制台打印一下返回的res.data数据
         console.log(res)
         var test = res.data.replace("artiList(","").slice(0,-1);
         var json = JSON.parse(test);
         console.log(json)
         //2:在请求接口成功之后，用setData接收数据
         this.setData({
           //第一个data为固定用法，第二个data是json中的data
          fList: json.BA8F6ICNwangning,
          url: 'https://3g.163.com/touch/reconstruct/article/list/BA8F6ICNwangning/',
          newName:'BA8F6ICNwangning'
         })
         console.log(this.data.fList)
         this.getrecom()
        }
       })

    }else if(id==2){
      wx.request({
        url: 'https://3g.163.com/touch/reconstruct/article/list/BA10TA81wangning/0-10.html',
        header: {
         'content-type': 'application/json'
        },
        success: res => {
         //1:在控制台打印一下返回的res.data数据
         console.log(res)
         var test = res.data.replace("artiList(","").slice(0,-1);
         var json = JSON.parse(test);
         console.log(json)
         //2:在请求接口成功之后，用setData接收数据
         this.setData({
           //第一个data为固定用法，第二个data是json中的data
          fList: json.BA10TA81wangning,
          url: 'https://3g.163.com/touch/reconstruct/article/list/BA10TA81wangning/',
          newName:'BA10TA81wangning'
         })
         console.log(this.data.fList)
         this.getrecom()
        }
       })

    }else if(id==3){
      wx.request({
        url: 'https://3g.163.com/touch/reconstruct/article/list/BA8FF5PRwangning/0-10.html',
        header: {
         'content-type': 'application/json'
        },
        success: res => {
         //1:在控制台打印一下返回的res.data数据
         console.log(res)
         var test = res.data.replace("artiList(","").slice(0,-1);
         var json = JSON.parse(test);
         console.log(json)
         //2:在请求接口成功之后，用setData接收数据
         this.setData({
           //第一个data为固定用法，第二个data是json中的data
          fList: json.BA8FF5PRwangning,
          url: 'https://3g.163.com/touch/reconstruct/article/list/BA8FF5PRwangning/',
          newName:'BA8FF5PRwangning'
         })
         console.log(this.data.fList)
         this.getrecom()
        }
       })
    }else if(id==4){
      wx.request({
        url: 'https://3g.163.com/touch/reconstruct/article/list/BEO4GINLwangning/0-10.html',
        header: {
         'content-type': 'application/json'
        },
        success: res => {
         //1:在控制台打印一下返回的res.data数据
         console.log(res)
         var test = res.data.replace("artiList(","").slice(0,-1);
         var json = JSON.parse(test);
         console.log(json)
         //2:在请求接口成功之后，用setData接收数据
         this.setData({
           //第一个data为固定用法，第二个data是json中的data
          fList: json.BEO4GINLwangning,
          url: 'https://3g.163.com/touch/reconstruct/article/list/BEO4GINLwangning/',
          newName:'BEO4GINLwangning'
         })
         console.log(this.data.fList)
         this.getrecom()
        }
       })

    }else if(id==5){
      wx.request({
        url: 'https://3g.163.com/touch/reconstruct/article/list/BAI67OGGwangning/0-10.html',
        header: {
         'content-type': 'application/json'
        },
        success: res => {
         //1:在控制台打印一下返回的res.data数据
         console.log(res)
         var test = res.data.replace("artiList(","").slice(0,-1);
         var json = JSON.parse(test);
         console.log(json)
         //2:在请求接口成功之后，用setData接收数据
         this.setData({
           //第一个data为固定用法，第二个data是json中的data
          fList: json.BAI67OGGwangning,
          url: 'https://3g.163.com/touch/reconstruct/article/list/BAI67OGGwangning/',
          newName:'BAI67OGGwangning'
         })
         console.log(this.data.fList)
         this.getrecom()
        }
       })
    }else if(id==6){
      wx.request({
        url: 'https://3g.163.com/touch/reconstruct/article/list/BA8EE5GMwangning/0-10.html',
        header: {
         'content-type': 'application/json'
        },
        success: res => {
         //1:在控制台打印一下返回的res.data数据
         console.log(res.data)
         var test = res.data.replace("artiList(","").slice(0,-1);
         var json = JSON.parse(test);
         console.log(json)
         //2:在请求接口成功之后，用setData接收数据
         this.setData({
           //第一个data为固定用法，第二个data是json中的data
          fList: json.BA8EE5GMwangning,
          url: 'https://3g.163.com/touch/reconstruct/article/list/BA8EE5GMwangning/',
          newName:'BA8EE5GMwangning'
         })
         console.log(this.data.fList)
         this.getrecom()
        }
       })
    }else if(id==7){
      wx.request({
        url: 'https://3g.163.com/touch/reconstruct/article/list/BAI6RHDKwangning/0-10.html',
        header: {
         'content-type': 'application/json'
        },
        success: res => {
         //1:在控制台打印一下返回的res.data数据
         console.log(res.data)
         var test = res.data.replace("artiList(","").slice(0,-1);
         var json = JSON.parse(test);
         console.log(json)
         //2:在请求接口成功之后，用setData接收数据
         this.setData({
           //第一个data为固定用法，第二个data是json中的data
          fList: json.BAI6RHDKwangning,
          url: 'https://3g.163.com/touch/reconstruct/article/list/BAI6RHDKwangning/',
          newName:'BAI6RHDKwangning'
         })
         console.log(this.data.fList)
         this.getrecom()
        }
       })

    }
  },
  getrecom() {
    var result = []
    for (var i = 0; i < this.data.fList.length; i += 5) {
      if(this.data.fList[i]!=null)
      result.push(this.data.fList.slice(i, i + 5));
    }
    this.setData({
      list: result
    })
    console.log(this.data.list)
    this.setData({
      show:this.data.list[0]
    })
  },
  //选择条目
  tabSelect(e) {
    this.setData({
      tabCur: e.currentTarget.dataset.id,
      addNew: true,
      scrollLeft: (e.currentTarget.dataset.id - 2) * 200,
      count: 0,
      list:[]
    })
    this.getNews()
  },
  onReachBottom: function(){
    console.log("触底")
    console.log(this.data.count)
    if(this.data.addNew) {
      this.getMore()
      this.data.addNew=false
    }
    
    if(this.data.count<this.data.list.length-1){
      wx.showLoading({
        title: '更多精彩内容',
      })
      setTimeout(()=>
      {
        this.setData({
          show:this.data.show.concat(this.data.list[this.data.count+1]),
          count:this.data.count+1
        }) 
        console.log(this.data.show)
      }, 500)
      wx.hideLoading()
    } else 
    {
      wx.showToast({
      title: '没有更多新闻了！',
      icon: 'success'
    })
    }
  }
})