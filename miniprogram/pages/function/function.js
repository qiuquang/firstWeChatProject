// pages/function/function.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        result:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 使用云函数前初始化 -- 27
        wx.cloud.init();
        const that = this
        wx.cloud.callFunction({
          name: 'sum',//上面这个云函数并不需要我们传递参数（也就不需要data属性）
        }).then(res => {
          console.log("云函数返回的结果",res)
          that.setData({
            result:res.result
          })
        }).catch(err => {
          console.log("云函数",err)
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