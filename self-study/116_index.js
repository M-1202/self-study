// 缺少 express模块

const express = require('express')
const app = express()   // 创建服务器


// 接受对路径 /hero 的 GET 请求
app.get('/hero',async (req,res) => {
    // 使用CORS解决对代理服务器的跨域
    res.header('access-control-allow-origin','*')
    // 响应一段测试文本
    res.send('你好，我是你忠实的代理')
})

// 监听9527端口
server.listen(9527, () => {
    console.log('Web 服务启动成功了')
})