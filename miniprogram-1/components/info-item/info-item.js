Component({
    data: {
        real: []
    },
    properties: {},
    methods: {
        more(e) {
            let index = e.currentTarget.dataset.index;
            let strbasic = JSON.stringify(this.data.real[index])
            wx.navigateTo({
                url: '/pages/infomore/infomore?basic=' + strbasic
            })
        }
    },
    lifetimes: {
        attached: function() {
            // 在组件实例进入页面节点树时执行
            var that = this;
            wx.request({
                url: 'http://192.168.0.100:9999/admin/api/querydreal',
                data: {},
                method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                // header: {}, // 设置请求的 header
                success: function(res) {
                    let getreal = res.data
                    for (let i = 0; i < getreal.length; i++) {
                        getreal[i].basic = JSON.parse(getreal[i].basic);
                        getreal[i].loss = JSON.parse(getreal[i].loss);
                        getreal[i].status = JSON.parse(getreal[i].status);
                    }
                    that.setData({
                        real: getreal
                    })
                }
            })
        },
        detached: function() {
            // 在组件实例被从页面节点树移除时执行
        }
    }
})