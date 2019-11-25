import * as echarts from '../../ec-canvas/echarts';

let month = []; //月份
let evaporation = []; //蒸发量
let precipitation = []; //降水量

Page({
    onShareAppMessage: function(res) {
        return {
            title: 'ECharts 可以在微信小程序中使用啦！',
            path: '/pages/index/index',
            success: function() {},
            fail: function() {}
        }
    },
    data: {
        ecBar: {
            onInit: function(canvas, width, height) {
                const barChart = echarts.init(canvas, null, {
                    width: width,
                    height: height
                });
                canvas.setChart(barChart);
                barChart.setOption(getBarOption());

                return barChart;
            }
        },

        ecBar1: {
            onInit: function(canvas, width, height) {
                const barChart = echarts.init(canvas, null, {
                    width: width,
                    height: height
                });
                canvas.setChart(barChart);
                barChart.setOption(getBarOption1());

                return barChart;
            }
        },

        ecBar2: {
            onInit: function(canvas, width, height) {
                const barChart = echarts.init(canvas, null, {
                    width: width,
                    height: height
                });
                canvas.setChart(barChart);
                barChart.setOption(getBarOption2());

                return barChart;
            }
        },



        ecScatter: {
            onInit: function(canvas, width, height) {
                const scatterChart = echarts.init(canvas, null, {
                    width: width,
                    height: height
                });
                canvas.setChart(scatterChart);
                scatterChart.setOption(getScatterOption());

                return scatterChart;
            }
        },
        ecScatter1: {
            onInit: function(canvas, width, height) {
                const scatterChart = echarts.init(canvas, null, {
                    width: width,
                    height: height
                });
                canvas.setChart(scatterChart);
                scatterChart.setOption(getScatterOption1());

                return scatterChart;
            }
        }
    },

    onReady() {

    },
    onLoad: function(options) {
        wx.request({
            url: 'http://192.168.0.100:9999/admin/api/echardata',
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function(res) {
                let getechart = res.data
                for (const key in getechart) {
                    month.push(getechart[key].moth);
                    evaporation.push(getechart[key].evaporation)
                    precipitation.push(getechart[key].precipitation)
                }
            }
        })
    }

});


function getBarOption() {

    let option = {
        title: {
            text: '近期合同数量统计',
            subtext: '单位(台)'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle: {
                fontSize: 14
            },
            data: ['蒸发量', '降水量'],
            align: 'right',
            right: 10
        },

        xAxis: [{
            type: 'category',
            data: month
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: '蒸发量',
                type: 'bar',
                data: evaporation,
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            },
            {
                name: '降水量',
                type: 'bar',
                data: precipitation,
                markPoint: {
                    data: [
                        { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
                        { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            }
        ]
    };

    return option;
}

function getBarOption1() {
    return {
        title: {
            text: '近期合同数量统计',
            subtext: '单位(台)'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle: {
                fontSize: 14
            },
            data: ['蒸发量', '降水量'],
            align: 'right',
            right: 10
        },

        xAxis: [{
            type: 'category',
            data: month
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: '蒸发量',
                type: 'bar',
                data: evaporation,
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            },
            {
                name: '降水量',
                type: 'bar',
                data: precipitation,
                markPoint: {
                    data: [
                        { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
                        { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            }
        ]
    };
}

function getBarOption2() {
    return {
        title: {
            text: '近期合同数量统计',
            subtext: '单位(台)'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle: {
                fontSize: 14
            },
            data: ['蒸发量', '降水量'],
            align: 'right',
            right: 10
        },

        xAxis: [{
            type: 'category',
            data: month
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: '蒸发量',
                type: 'bar',
                data: evaporation,
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            },
            {
                name: '降水量',
                type: 'bar',
                data: precipitation,
                markPoint: {
                    data: [
                        { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
                        { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            }
        ]
    };
}




function getScatterOption() {

    return {
        title: {
            text: '各区域注册数'
        },
        backgroundColor: "#ffffff",
        color: ["#FFDB5C", "#FF9F7F"],
        series: [{
            label: {
                normal: {
                    fontSize: 14
                }
            },
            type: 'pie',
            center: ['50%', '50%'],
            radius: [0, '60%'],
            data: [{
                value: evaporation[5],
                name: '福建省' + '(' + evaporation[5] + ')'
            }, {
                value: evaporation[3],
                name: '未知' + '(' + evaporation[3] + ')'
            }],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 2, 2, 0.3)'
                }
            }
        }]
    }
}

function getScatterOption1() {

    return {
        title: {
            text: '各区域注册数'
        },
        backgroundColor: "#ffffff",
        color: ["#ff8787", "#c84a4a"],
        series: [{
            label: {
                normal: {
                    fontSize: 14
                }
            },
            type: 'pie',
            center: ['50%', '50%'],
            radius: [0, '60%'],
            data: [{
                value: evaporation[2],
                name: '福建省' + '(' + evaporation[2] + ')'
            }, {
                value: evaporation[1],
                name: '未知' + '(' + evaporation[1] + ')'
            }],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 2, 2, 0.3)'
                }
            }
        }]
    }
}