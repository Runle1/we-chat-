// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[],
    imglist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://m.maizuo.com/v4/api/billboard/home?__t=1541818735273',
      success:(res)=>{
        console.log(res.data.data);
        console.log(res.data.data.billboards)
        this.setData({
          datalist: res.data.data.billboards
        })
      }
    })
    wx.request({
      url: 'https://m.maizuo.com/v4/api/film/now-playing?__t=1541829978503&page=1&count=5',
      success:(res)=>{
        console.log(res.data.data.films);
        this.setData({
          imglist: res.data.data.films      
        })
      }
    })
    
    this.getRes();
    this.current = 1;
  },
  getRes(){
    wx.request({
      url: `https://m.maizuo.com/v4/api/film/now-playing?__t=1541829978503&page=1&count=${this.current}`,
      success: (res) => {
        console.log(res.data.data.films);
        this.setData({
          imglist: res.data.data.films
        })
      }
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
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("aaa");
    this.current +=8;
    this.getRes();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  handleClick(ev){
    recorderManager.start(options)
    console.log(ev.currentTarget.dataset.id);

    wx.navigateTo({
      url: '/pages/detail/detail?id=' + ev.currentTarget.dataset.id ,
    })
  },

})