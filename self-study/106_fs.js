/**
 * 目标：基于 fs 模块读写文件内容
 *  1. 加载 fs 模块对象
 *  2. 写入文件内容
 *  3. 读取文件内容
 */
// 1. 加载 fs 模块对象
const fs = require('fs')
// 2. 写入文件内容
fs.writeFile('./106_fs.txt','我是一个测试', err => {
    if (err) console.log(err)
    else console.log('写入成功')
})
// 3. 读取文件内容
fs.readFile('./106_fs.txt', (err,data) => {
    if (err) console.log(err)
    // data 是 buffer 16 进制数据流对象
    // .toString() 转换成字符串
    else console.log(data.toString())
})



// 压缩html文件
// const fs = require('fs')
const path = require('path')
// 1. 读取源html文件
fs.readFile(path.join(__dirname,'100_天气预报案例.html'), (err,data) => {
    if(err) console.log(err)
    else {
        // console.log(data.toString())
        const htmlStr = data.toString()
        // 2. 使用正则将\n \r替换成空字符
        const resultStr = htmlStr.replace(/[\n\r]/g,'')
        // console.log(resultStr)
        // 3. 写到新html文件中
        fs.writeFile(path.join(__dirname,'100_压缩天气预报案例.html'),resultStr, err => {
            if(err) console.log(err)
            else console.log('写入成功')
        })
    }
})