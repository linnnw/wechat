// pages/infomoremore/infomoremore.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        day: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;
        wx.request({
            url: 'http://192.168.0.100:9999/admin/api/queryrecordday',
            data: { devid_company: options.id },
            method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function(res) {
                let getreal = res.data
                for (let i = 0; i < getreal.length; i++) {
                    getreal[i].basic = JSON.parse(getreal[i].basic);
                    getreal[i].loss = JSON.parse(getreal[i].loss);
                    getreal[i].status = JSON.parse(getreal[i].status);
                }
                that.setData({
                    day: getreal
                })
            }
        })
    }
})