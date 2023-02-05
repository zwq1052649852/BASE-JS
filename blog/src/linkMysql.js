//对接后端接口
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'Blog_DATA',
})
const express = require('express')
const router = express.Router()
function querySql(sql) {
    connection.connect()
    return new Promise((resolve, reject) => {
        try {
            connection.query(sql, (err, res) => {
                if (err) throw err
                console.log('res: ', res)
                resolve(res)
            })
        } catch (e) {
            reject(e)
        } finally {
            connection.end()
        }
    })
}
router.post('/getResource', () => {
    querySql('select * from KnowledgeResource')
})
module.exports = router
