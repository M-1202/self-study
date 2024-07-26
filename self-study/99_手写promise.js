// 记录Promise的三种状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

/**
 * 运行一个微队列任务   手写
 * 把传递的函数放到微队列中         也可以用自带的 queueMicrotask(callback)
 * 有个bug: 在浏览器环境下无法判断process  process未定义会报错
 * @param {Function} callback 
 */
function runMicroTask(callback){
    // 判断所在的环境  node环境 浏览器环境 其它环境
    if(process && process.nextTick) {
        process.nextTick(callback)
    }else if(MutationObserver){
        const p = document.createElement('p')
        const observer = new MutationObserver(callback)
        observer.observe(p,{
            childList: true // 观察元素内部的变化
        })
        p.innerHTML = '1'   // 内部变化了就调用callback
    }else{
        setTimeout(callback, 0)  // 模拟一个微队列
    }
}

/**
 * 判断是否为Promise
 * @param {any} obj 
 * @returns 
 */
function isPromise(obj){
    // !! 确保返回值是布尔类型
   return !!(obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function')
}

class MyPromise{
    /**
     * 创建一个Promise
     * @param {Function} executor 任务执行器    立即执行
     */
    constructor(executor){
        this._state = PENDING // 状态
        this._value = undefined // 数据
        this._handlers = []    // 处理函数形成的队形   每一项为对象
        // 当任务执行器中出现错误时，会直接调用this.reject
        try {
            executor(this._resolve.bind(this), this._reject.bind(this))  // 把这两个函数的this指向改为 实例对象promise
        } catch (error) {
            this._reject(error)
        }
        
    }

    // 写在原型上
    /**
     * 向处理队列中添加一个函数
     * @param {Function} executor 添加的函数
     * @param {String} state 该函数什么状态下执行
     * @param {Function} resolve 让then()函数返回的新Promise成功
     * @param {Function} reject 让then()函数返回的新Promise失败
     */
    _pushHandler(executor,state,resolve,reject){
        this._handlers.push({
            executor,
            state,
            resolve,
            reject
        })
    }

    /**
     * 处理一个handler
     * @param {Object} handler 
     */
    _runOneHandler({ executor,state,resolve,reject}) {
        // 把处理函数放到微队列里
        queueMicrotask(() => {
            if (this._state !== state) {
                // 状态不一致不做处理
                return
            }
            
            if (typeof executor !== 'function') {
                // then()传的参数不是一个函数时  会发生状态穿透 新Promise的状态和旧Promise的状态保持一致
                if(this._state === PENDING){
                    return
                }else{
                    this._state === FULFILLED
                        ? resolve(this._value)
                        : reject(this._value)
                    return
                }
            }
            try {
               const result = executor(this._value)
               if(isPromise(result)){
                // result.then(resolve,reject)
                //    result._state === FULFILLED
                //        ? resolve(result._value)
                //        : reject(result._value)
                if(result._state === PENDING){
                    return
                }else{
                    result._state === FULFILLED
                        ? resolve(result._value)
                        : reject(result._value)
                }
               }else{
                resolve(result)
               }
            } catch (error) {
                reject(error)
            }
            
        })
    }

    /**
     * 根据实际情况，执行队列
     * 状态改变时 执行该函数
     * 调用then()函数时 执行该函数
     */
    _runHandlers(){
        if(this._state === PENDING) {
            // 目前状态仍在挂起
            return
        }
        // console.log('执行队列')
        // console.log(this._state)
        // 遍历_handlers数组中的数据  并删除当前的第一项
        while (this._handlers[0]){
            const handler = this._handlers[0]
            this._runOneHandler(handler)
            this._handlers.shift()
        }
    }
    

    /**
     * Promise A+规范的then()函数
     * @param {Function} onFulfilled 
     * @param {Function} onRejected 
     */
    then(onFulfilled,onRejected){
        return new MyPromise((resolve,reject) => {
            this._pushHandler(onFulfilled,FULFILLED,resolve,reject)
            this._pushHandler(onRejected,REJECTED,resolve,reject)
            this._runHandlers() // 调用then()函数时 执行队列
        })
    }

    /**
     * 
     * @param {String} newState 新状态
     * @param {any} value 相关数据
     */
    _changeState(newState,value){
        // 状态一旦改变不能再次更改
        if(this._state !== PENDING){
            return
        }
        this._state = newState
        this._value = value
        // console.log('当前状态已改变')
        this._runHandlers()     // 状态变化 执行队形
    }

    /**
     * 标记当前任务完成
     * @param {Function} data 任务完成的相关数据
     */
    _resolve(data){
        // 改变状态和数据
        this._changeState(FULFILLED,data)
    }

    /**
     * 标记当前任务失败
     * @param {Function} reason 任务失败的相关数据
     */
    _reject(reason){
        // 改变状态和数据
        this._changeState(REJECTED, reason)
    }
}

// 测试
const p = new MyPromise((resolve,reject) => {
    setTimeout(() => {
        resolve(111)
    }, 1000)
})
const p2 = p.then((data) => {
    console.log(data)
    // throw 'abc'
    // return new MyPromise((resolve, reject) => {
    //     // resolve('成功了')
    // })
})
setTimeout(() => {
    console.log(p)
    console.log(p2)
},1500)
// console.log(p)
