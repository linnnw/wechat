// pages/user/user.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userdata: []
    },
    selectUser(e) {
        let that = this;
        let index = e.currentTarget.dataset.index
        index += 1;
        wx.request({
            url: 'http://192.168.0.100:9999/admin/api/usergz',
            data: { id: index },
            method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function(res) {
                // success
                that.getUserData();
            }
        })

    },
    selectColl(e) {
        let that = this;
        let index = e.currentTarget.dataset.index
        index += 1;
        wx.request({
            url: 'http://192.168.0.100:9999/admin/api/usersc',
            data: { id: index },
            method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function(res) {
                // success
                that.getUserData();
            }
        })
    },
    getUserData() { /* 获取数据 */
        var that = this;
        wx.request({
            url: 'http://192.168.0.100:9999/admin/api/queryuser',
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function(res) {
                // success
                that.setData({
                    userdata: res.data
                })
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getUserData()
    }
})