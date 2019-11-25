module.exports = app => {
    const express = require('express');
    const router = express.Router();

    let pool = require('../db/db');





    // let addSortSql = 'insert into sort(name) value (?)'; /*新增分类*/

    // router.post('/addSort', (req, res) => {
    //     let addSortParams = req.body.name;
    //     // console.log(req.body.name);
    //     pool.getConnection((err, connection) => {
    //         if (err) {
    //             console.error(err)
    //         } else {
    //             // console.log('成功');
    //             connection.query(addSortSql, addSortParams, (err, rows) => {
    //                 if (err) {
    //                     console.error(err)
    //                 } else {
    //                     res.send(rows)
    //                 }
    //                 connection.release();
    //             })
    //         }
    //     })
    // })
    let querysetup = 'select * from setup' /*查询*/
    router.get('/querysetup', (req, res) => {
        // console.log(req.body.name);
        pool.getConnection((err, connection) => {
            if (err) {
                console.error(err)
            } else {
                // console.log('成功');
                connection.query(querysetup, (err, rows) => {
                    if (err) {
                        console.error(err)
                    } else {
                        res.send(rows)
                    }
                    connection.release();
                })
            }
        })
    })

    let queryuser = 'select * from user' /*查询*/
    router.get('/queryuser', (req, res) => {
        // console.log(req.body.name);
        pool.getConnection((err, connection) => {
            if (err) {
                console.error(err)
            } else {
                // console.log('成功');
                connection.query(queryuser, (err, rows) => {
                    if (err) {
                        console.error(err)
                    } else {
                        res.send(rows)
                    }
                    connection.release();
                })
            }
        })
    })


    let echartdata = 'select * from echartdata' /*查询*/
    router.get('/echardata', (req, res) => {
        // console.log(req.body.name);
        pool.getConnection((err, connection) => {
            if (err) {
                console.error(err)
            } else {
                // console.log('成功');
                connection.query(echartdata, (err, rows) => {
                    if (err) {
                        console.error(err)
                    } else {
                        res.send(rows)
                    }
                    connection.release();
                })
            }
        })
    })



    let gz = 'update user set gz=ABS(gz-1) WHERE id=?' /* 关注 取反 */
    router.post('/usergz', (req, res) => {
        let userid = req.body.id;
        // console.log(req.body.name);
        pool.getConnection((err, connection) => {
            if (err) {
                console.error(err)
            } else {
                // console.log('成功');
                connection.query(gz, userid, (err, rows) => {
                    if (err) {
                        console.error(err)
                    } else {
                        res.send(rows)
                    }
                    connection.release();
                })
            }
        })
    })

    let sc = 'update user set sc=ABS(sc-1) WHERE id=?' /* 关注 取反 */
    router.post('/usersc', (req, res) => {
        let userid = req.body.id;
        // console.log(req.body.name);
        pool.getConnection((err, connection) => {
            if (err) {
                console.error(err)
            } else {
                // console.log('成功');
                connection.query(sc, userid, (err, rows) => {
                    if (err) {
                        console.error(err)
                    } else {
                        res.send(rows)
                    }
                    connection.release();
                })
            }
        })
    })



    let queryrecordday = 'select * from gat_recordday WHERE devid_company LIKE ?' /*查询*/
    router.post('/queryrecordday', (req, res) => {
        let addSortParams = req.body.devid_company;
        // console.log(req.body.name);
        pool.getConnection((err, connection) => {
            if (err) {
                console.error(err)
            } else {
                // console.log('成功');
                connection.query(queryrecordday, '%' + addSortParams + '%', (err, rows) => {
                    if (err) {
                        console.error(err)
                    } else {
                        res.send(rows)
                    }
                    connection.release();
                })
            }
        })
    })

    let querydreal = 'SELECT * FROM gat_recordreal limit 10' /*查询*/
    router.get('/querydreal', (req, res) => {
        let addSortParams = req.body.name;
        // console.log(req.body.name);
        pool.getConnection((err, connection) => {
            if (err) {
                console.error(err)
            } else {
                // console.log('成功');
                connection.query(querydreal, (err, rows) => {
                    if (err) {
                        console.error(err)
                    } else {
                        res.send(rows)
                    }
                    connection.release();
                })
            }
        })
    })



    // let queryById = 'select name from sort where id = ?' /*根据id查询名字*/

    // router.get('/queryById/:id', (req, res) => {
    //     let sortId = req.params.id;
    //     // console.log(req.params.id);
    //     pool.getConnection((err, connection) => {
    //         if (err) {
    //             console.error(err)
    //         } else {
    //             // console.log('成功');
    //             connection.query(queryById, sortId, (err, rows) => {
    //                 if (err) {
    //                     console.error(err)
    //                 } else {
    //                     res.send(rows)
    //                 }
    //                 connection.release();
    //             })
    //         }
    //     })
    // })

    let editNameById = 'update sort set name=? where id = ?' /*根据id修改名字*/

    router.post('/editNameById/:id', (req, res) => {
        let sortId = req.params.id;
        let sortName = req.body.name;

        let arr = [sortName, sortId]
            // console.logeditNameById(req.params.id);
        pool.getConnection((err, connection) => {
            if (err) {
                console.error(err)
            } else {
                // console.log('成功');
                connection.query(editNameById, arr, (err, rows) => {
                    if (err) {
                        console.error(err)
                    } else {
                        res.send(rows)
                    }
                    connection.release();
                })
            }
        })
    })


    // let delSortById = 'delete from sort where id=?' /*根据id删除数据*/
    // router.get('/delSortById/:id', (req, res) => {

    //     let sortId = req.params.id;
    //     // console.logeditNameById(req.params.id);
    //     pool.getConnection((err, connection) => {
    //         if (err) {
    //             console.error(err)
    //         } else {
    //             // console.log('成功');
    //             connection.query(delSortById, sortId, (err, rows) => {
    //                 if (err) {
    //                     console.error(err)
    //                 } else {
    //                     res.send(rows)
    //                 }
    //                 connection.release();
    //             })
    //         }
    //     })
    // })

    app.use('/admin/api', router);
}