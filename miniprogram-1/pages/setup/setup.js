// pages/setup/setup.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        setup: []
    },

    more: () => {
        wx.navigateTo({
            url: '/pages/box/box'
        })
    },
    jumpUser: () => {
        wx.navigateTo({
            url: '/pages/user/user'
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;
        wx.request({
            url: 'http://192.168.0.100:9999/admin/api/querysetup',
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function(res) {
                let setupdata = res.data;
                for (const key in setupdata) {
                    setupdata[key].data = JSON.parse(setupdata[key].data)
                }

                // success
                that.setData({
                    setup: setupdata
                })
            }
        })
    }
})