var mysql = require('mysql');

let config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'wechat' //数据库名
};

module.exports = mysql.createPool(config);