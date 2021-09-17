//app.js
App({
  onLaunch: function () {
    // wx.login({
    //   success(res){
    //     console.log('wx.login得到的数据', res);
    //   }
    // })

    // wx.getSetting({
    //   success: (res) => {
    //     console.log('wx.getSetting得到的数据', res);
    //     if(res.authSetting['scope.userInfo']) {
    //       // 设置里面运行获取用户数据--获取用户数据 
    //       wx.getUserInfo({
    //         success: (res) => {
    //           console.log('wx.getUserInfo得到的数据', res);
    //           this.globalData.userInfo = res.userInfo;
    //         }
    //       })

    //     }
    //   }
    // })
    // if (!wx.cloud) {
    //   console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    // } else {
    //   wx.cloud.init({
    //     // env 参数说明：
    //     //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
    //     //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
    //     //   如不填则使用默认环境（第一个创建的环境）
    //     // env: 'my-env-id',
    //     traceUser: true,
    //   })
    // }
    // this.globalData = {}
  },
  globalData: {
    userInfo: null
  }
})
