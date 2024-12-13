// 把传递的函数放到微队列中         也可以用自带的 queueMicrotask(callback)
// console.log(111)
// setTimeout(function () {
//     console.log(333);
// }, 0)
// queueMicrotask(function () { console.log(222) })

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(123)
//     },1000)
// })
// const p2 = p1.then()
// setTimeout(() => {
//     console.log(p1)
//     console.log(p2)
// },1500)

// function A(str) {
//     if (str.startsWith('.')) {
//         str = str.slice(1)
//         A(str)
//         console.log(str);
//     } else {
//         return str
//     }


// }
// console.log(A('....index'))
// console.log([1, 2, 3].indexOf(4));


// function Man(){
//     this.x = 'hello'
// }
// Man.prototype.x = 'world'
// const m1 = new Man()
// m1.x = 'what'
// console.log(m1.x)
// delete m1.x
// console.log(m1.x)
// delete m1.x
// console.log(m1.x)
// m1.x = undefined
// console.log(m1.x)


// 输出顺序 async1 start  ---> end ---> timer2 --->  timer3 ---> timer1
// async function async1(){
//     console.log('async1 start')
//     await async2()
//     setTimeout(() => { console.log('timer1') }, 0)
// }
// function async2(){
//     setTimeout(()=>{console.log('timer2')},0)
// }
// async1()
// setTimeout(()=>{console.log('timer3')},0)
// console.log('end')





// let arr = [4, 2, 3, 1]
// 步骤1
// function step1(arr) {
//     let arr1 = JSON.parse(JSON.stringify(arr))

//     for (let i = 0; i < arr1.length - 1; i++) {
//         for (let j = 0; j < arr1.length - 1 - i; j++) {
//             if (arr1[j] < arr1[j + 1]) {
//                 arr1[j] = arr1[j + 1] + arr1[j] - (arr1[j + 1] = arr1[j])
//             }
//         }
//     }
//     let obj = {}
//     let n = 3

//     for (let i = 0; i < arr1.length; i++) {
//         let k = arr1[i]
//         if (i === 0) {
//             obj[k] = n
//         } else {
//             if (arr1[i] === arr1[i - 1]) {
//                 obj[k] = n
//             } else {
//                 n++
//                 obj[k] = n
//             }
//         }
//     }

//     for (let i = 0; i < arr.length; i++) {
//         let k = arr[i]
//         arr[i] = obj[k]
//     }
//     return arr
// }

// // let arr = [1, 2, 3]
// // 步骤2
// function step2(arr) {
//     arr.forEach(item => {
//         for (let i = 0; i < 3; i++) {
//             arr.push(item)
//         }
//     })

//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 arr[j] = arr[j + 1] + arr[j] - (arr[j + 1] = arr[j])
//             }
//         }
//     }

//     return arr
// }

// // let arr = [11, 2, 3, 22]
// // 步骤3
// function step3(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 arr[j] = arr[j + 1] + arr[j] - (arr[j + 1] = arr[j])
//             }
//         }
//     }
//     if (arr.indexOf(17) === -1) {
//         arr.push(17)
//         for (let i = 0; i < arr.length - 1; i++) {
//             for (let j = 0; j < arr.length - 1 - i; j++) {
//                 if (arr[j] > arr[j + 1]) {
//                     arr[j] = arr[j + 1] + arr[j] - (arr[j + 1] = arr[j])
//                 }
//             }
//         }
//         return arr.indexOf(17)
//     } else {
//         return arr.indexOf(17)
//     }

// }

// // 结果
// function result(x) {
//     return step3(step2(step1(x)))
// }
// const arr = [1, 2, 3]
// console.log(result(arr))


// const arr = [0,[1,2,[3,4]]]
// // console.log(arr.flat(Infinity));
// function flatArray(arr) {
//     return arr.reduce((pre,cur) => {
//         if(Array.isArray(cur)){
//             return pre.concat(flatArray(cur))
//         }else{
//             return pre.concat(cur)
//         }
//     },[])
// }

// console.log(flatArray(arr));

// async function async1() {
//     console.log(1)
//     await async2()
//     console.log(2);
// }
// async function async2() {
//     new Promise(function(resolve){
//         console.log(3);
//         resolve()
//     }).then(function(){console.log(4);}
// )
// }
// console.log(5);
// setTimeout(function(){console.log(6);},0)
// async1()
// new Promise(function(resolve){
//     console.log(7);
//     resolve()
// }).then(function(){console.log(8);}
// )
// console.log(9);


// 方法1
// function buildTree(data) {
//     let tree = {};

//     data.forEach(item => {
//         let parts = item.split('/');
//         let path = parts[0].split('-');
//         let filename = parts.length > 1 ? parts[1] : parts[0];

//         let current = tree;
//         path.forEach(directory => {
//             if (!(directory in current)) {
//                 current[directory] = {};
//             }
//             current = current[directory];
//         });

//         current[filename] = {}; // Assuming an empty object as each node's value
//     });

//     return tree;
// }

// // Test data
// let testData = [
//     'A-B-C-D-E/F',
//     'A-B-K/L',
//     'G',
//     'A-H/I',    
//     'M-B-C-D/M-N',
//     'M-B-C-D'
// ];

// // Build the tree structure
// let tree = buildTree(testData);

// // Convert tree to JSON string (optional for visualization)
// let treeJson = JSON.stringify(tree, null, 2);
// console.log(treeJson);

// 方法2
// function parseToTree(logEntries) {
//     const tree = {};

//     function addNode(pathParts, currentNode = tree) {
//         const part = pathParts.shift();
//         if (!currentNode[part]) {
//             currentNode[part] = {};
//         }
//         if (pathParts.length > 0) {
//             addNode(pathParts, currentNode[part]);
//         } else {
//             currentNode.$isLeaf = true; // Mark the last node as a leaf for rendering purposes
//         }
//     }

//     logEntries.forEach(entry => {
//         const parts = entry.split('-').filter(Boolean); // Split and remove empty parts
//         addNode(parts);
//     });

//     return tree;
// }

// // Test data
// const testData = [
//     'A-B-C-D-E/F',
//     'A-B-K/L',
//     'G',
//     'A-H/I',
//     'M-B-C-D/M-N',
//     'M-B-C-D'
// ];

// const treeStructure = parseToTree(testData);

// console.log(treeStructure);

// 方法3
// function convertToTreeStructure(logFiles) {
//   const tree = {};

//   // 解析每个日志文件路径并构建树结构
//   logFiles.forEach(logFile => {
//     const parts = logFile.split('-'); // 分割路径
//     let currentNode = tree; // 当前节点初始化为根节点

//     // 遍历路径部分，构建或查找对应的节点
//     parts.forEach((part, index) => {
//       if (index < parts.length - 1) { // 不是最后一个部分（名称）
//         if (!currentNode[part]) {
//           currentNode[part] = {};
//         }
//         currentNode = currentNode[part];
//       } else { // 最后一个部分，代表名称，添加到当前节点的_children数组中
//         if (!currentNode._children) {
//           currentNode._children = [];
//         }
//         currentNode._children.push(part);
//       }
//     });
//   });

//   // 将树结构转换为数组形式，以便于渲染
//   function flattenTree(node, path = [], treeArray = []) {
//     for (let key in node) {
//       if (key !== '_children') {
//         treeArray.push({ title: key, key: path.concat(key).join('-'), children: [] });
//         flattenTree(node[key], path.concat(key), treeArray[treeArray.length - 1].children);
//       } else if (node._children) {
//         node._children.forEach(name => {
//           treeArray.push({ title: name, key: path.concat(name).join('-'), children: [] });
//         });
//       }
//     }
//     return treeArray;
//   }

//   return flattenTree(tree);
// }

// // 测试数据
// const testLogs = [
//   'A-B-C-D-E/F',
//   'A-B-K/L',
//   'G',
//   'A-H/I',
//   'M-B-C-D/M-N',
//   'M-B-C-D'
// ];

// // 转换并输出结果
// console.log(convertToTreeStructure(testLogs));

// 方法4
// function parseToTreeForRendering(logEntries) {
//     const tree = {};

//     function addNode(parts, currentNode = tree) {
//         const part = parts.shift();
//         if (!currentNode[part]) {
//             currentNode[part] = {};
//         }
//         if (parts.length === 0) {
//             currentNode._children = [part]; // Mark the last part as a leaf with _children array
//         } else {
//             addNode(parts, currentNode[part]);
//         }
//     }

//     logEntries.forEach(entry => {
//         const parts = entry.split('-').filter(Boolean);
//         addNode(parts);
//     });

//     function flattenTree(node, path = [], treeArray = []) {
//         for (let key in node) {
//             if (key !== '_children') {
//                 treeArray.push({ title: key, key: path.concat(key).join('-'), children: [] });
//                 flattenTree(node[key], path.concat(key), treeArray[treeArray.length - 1].children);
//             } else if (Array.isArray(node._children)) {
//                 node._children.forEach(name => {
//                     treeArray.push({ title: name, key: path.concat(name).join('-'), children: [] });
//                 });
//             }
//         }
//         return treeArray;
//     }

//     return flattenTree(tree);
// }

// const testData = [
//     'A-B-C-D-E/F',
//     'A-B-K/L',
//     'G',
//     'A-H/I',
//     'M-B-C-D/M-N',
//     'M-B-C-D'
// ];

// const treeStructureForRendering = parseToTreeForRendering(testData);

// console.log(treeStructureForRendering);

// 方法5
// function buildTree(logFileNames) {
//     const tree = {};

//     logFileNames.forEach(fileName => {
//         const parts = fileName.split('/');
//         let currentNode = tree;

//         parts.forEach(part => {
//             if (!currentNode.children) {
//                 currentNode.children = {};
//             }
//             if (!currentNode.children[part]) {
//                 currentNode.children[part] = {};
//             }
//             currentNode = currentNode.children[part];
//         });
//     });

//     return tree;
// }

// const testData = [
//     'A-B-C-D-E/F',
//     'A-B-K/L',
//     'G',
//     'A-H/I',
//     'M-B-C-D/M-N',
//     'M-B-C-D'
// ];

// const treeData = buildTree(testData);
// console.log(JSON.stringify(treeData, null, 2));



// 快排
// function quickSort(arr) {
//     // 如果数组长度小于等于1，直接返回数组本身
//     if (arr.length <= 1) {
//         return arr;
//     }

//     // 选择第一个元素作为基准点
//     const pivot = arr[0];
//     const left = [];
//     const right = [];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             // 比基准点小的放在左边数组
//             left.push(arr[i]);
//         } else {
//             // 比基准点大的或相等的放在右边数组
//             right.push(arr[i]);
//         }
//     }

//     // 递归排序左右两个子数组，并拼接起来
//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

// const obj = {1: 1, 2: 2, 3: 3}
// const set = new Set([1, 2, 3])
// const arr = [1, 2, 3]

// console.log(obj.hasOwnProperty('1'));   // true
// console.log(obj.hasOwnProperty(1));     // true
// console.log(set.has('1'));              // false
// console.log(set.has(1));                // true
// console.log(arr.includes('1'));         // false
// console.log(arr.includes(1));           // true

// arr = [1,2,3,4,5] 实现 arr[-1] === 5 arr[-1 + arr.length] = arr[4] = 5
// const arr = [1,2,3,4,5]
// const proxy = new Proxy(arr,{
//     get(target,key,receiver){
//         const index = Number(key)
//         if(index < 0){
//             key = target.length + index
//         }
//         return arr[key]
//     }
// })
// console.log(proxy[-1]);     // 5

// function A(){}
// function B(){}
// A.prototype = new B()
// let o = new A()
// console.log(o instanceof B);

// 数组扁平化
// let arr = [1,[2,[3,[4,[5]]]]]

// function flatten(arr){
//     let res = []
//     arr.forEach(item => {
//         if(Array.isArray(item)){
//             res = res.concat(flatten(item))
//         }else{
//             res.push(item)
//         }
//     })
//     return res
// }

// Function.prototype.myCall = function(context, ...args) {
//     if (typeof this !== 'function') {
//         throw new TypeError('Error');
//     }
//     context = context || window;
//     context.fn = this;
//     const result = context.fn(...args);
//     delete context.fn;
//     return result;
// }

// function bubbleSort(arr){
//     // 外层循环控制比较轮数
//     for(let i = 0; i < arr.length; i++){
//         // 内层循环控制每轮比较次数
//         for(let j = 0; j < arr.length -i -1; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }
// A instanceof B	用来判断 B.prototype是否出现在 A的原型链上
// function myInstanceof(left,right){
//   let proto = left.__proto__
//   let prototype = right.prototype
//   while(proto){
//     if(prototype === proto) return true
//     proto = proto.__proto__
//   }
//   return false
// }

// console.log(myInstanceof([],Number));


// const obj = {
//   a : 1,
//   b : 2,
//   c : 3,
//   [Symbol.iterator](){
//     let arr = Object.values(this)
//     return arr[Symbol.iterator]()
//   }
// }
// for(let i of obj){
//   console.log(i);
// }

// // 快排
// function quickSort(arr){
//   if(arr.length <= 1) return arr;
//   const pivot = arr[0]  // 基准点
//   const left = []       // 左数组 存放比pivot小的数
//   const right = []      // 右数组 存放比pivot大的数
//   for(let i = 1; i < arr.length;i++){
//     if(arr[i] < pivot){
//       left.push(arr[i])
//     }else{
//       right.push(arr[i])
//     }
//   }
//   return [...quickSort(left),pivot,...quickSort(right)]
// }
// const arr = [1,11,15,22,2,6]
// console.log(quickSort(arr));

// // 反转链表
// function ListNode(x){
//   this.val = x
//   this.next = null
// }

// function reverseList(head){
//   if(head === null || head.next === null) return head
//   let res = reverseList(head.next)
//   head.next.next = head
//   head.next = null
//   return res
// }

// const a = new ListNode(1)
// const b = new ListNode(2)
// const c = new ListNode(3)
// a.next = b
// b.next = c

// console.log(reverseList(a));

// // 深拷贝函数
// function cloneDeep(obj) {
//   // 判断obj是否为 基本数据类型（包括null）
//   if (typeof obj !== "object" || obj === null) {
//     return obj;
//   }
//   // 判断obj是否为 数组
//   if (Array.isArray(obj)) {
//     let newArr = [];
//     for (let i = 0; i < obj.length; i++) {
//       newArr[i] = cloneDeep(obj[i]);
//     }
//     return newArr;
//   }
//   // 判断obj是否为 对象
//   if (obj instanceof Object) {
//     let newObj = {};
//     for (let key in obj) {
//       // 判断是否为对象自身的属性
//       if (obj.hasOwnProperty(key)) {
//         newObj[key] = cloneDeep(obj[key]);
//       }
//     }
//     return newObj;
//   }
// }

// function generateRandomStrings(count, length) {
//     const generatedStrings = new Set(); // 使用 Set 来存储生成的字符串，确保不重复
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//     while (generatedStrings.size < count) { // 直到生成的字符串数量达到指定数量
//         let randomString = '';
//         for (let i = 0; i < length; i++) {
//             const randomIndex = Math.floor(Math.random() * characters.length); // 随机选择字符
//             randomString += characters[randomIndex];
//         }
//         generatedStrings.add(randomString); // 将生成的字符串添加到 Set 中
//     }

//     return Array.from(generatedStrings); // 返回生成的字符串数组
// }

// // 获取按钮和结果显示元素
// const button = document.getElementById('fetchDataButton');
// const userList = document.getElementById('userList');

// // 为按钮添加点击事件监听器
// button.addEventListener('click', async function() {
//     try {
//         // 使用 Fetch API 请求数据
//         const response = await fetch('https://www.baidu.com/users');

//         // 解析 JSON 数据
//         const users = await response.json();

//         // 清空之前的内容
//         userList.innerHTML = '';

//         // 遍历用户数据并添加到页面
//         users.forEach(user => {
//             const userDiv = document.createElement('div');
//             userDiv.className = 'user';
//             userDiv.textContent = `姓名: ${user.name}, 邮箱: ${user.email}`;
//             userList.appendChild(userDiv);
//         });
//     } catch (error) {
//         console.error('获取数据时出错:', error);
//         userList.textContent = '获取数据失败，请重试。';
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const images = document.querySelectorAll("img[data-src]"); // 选择所有带有 data-src 属性的 img 标签
//     const options = {
//         root: null, // 交叉观察的根元素，这里设置为 null 表示使用视口
//         rootMargin: '0px',
//         threshold: 0.1 // 交叉比例阈值，表示当图像进入视口时的加载条件
//     };

//     const lazyLoad = (image) => {
//         image.src = image.dataset.src; // 将 data-src 的值赋给 src 属性
//         image.onload = () => {
//             image.classList.add('loaded'); // 加载完毕后，可以添加类以便进行样式处理
//         };
//     };

//     const imageObserver = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) { // 当图像进入视口
//                 lazyLoad(entry.target); // 加载图像
//                 observer.unobserve(entry.target); // 停止观察已加载的图像
//             }
//         });
//     }, options);

//     images.forEach(image => {
//         imageObserver.observe(image); // 观察每个图像
//     });
// });


// var obj = {
//     name:'张三',
//     a:()=>{
//         console.log(this.name)
//     },
//     b:function(){
//         (()=>{
//            console.log(this.name)
//         })()
//     }
// }

// obj.a()
// obj.b()

// ----------------------------------------------------------------------
// function countCombinations(target) {
//   // 初始化一个长度为 target + 1 的 dp 数组，所有元素初始化为 0
//   let dp = new Array(target + 1).fill(0);
//   dp[0] = 1; // 和为0时，只有1种组合方式，什么都不选

//   // 数字集合
//   const nums = [1, 2, 7];

//   // 遍历每个数字
//   for (let num of nums) {
//     // 更新 dp 数组
//     for (let i = num; i <= target; i++) {
//       dp[i] += dp[i - num];
//     }
//   }

//   // 返回 dp[target] 即为组合数
//   return dp[target];
// }

// // 调用函数，求和为150的组合数
// console.log(countCombinations(150)); // 输出和为150的组合数


// function findSpecialSquares() {
//   const result = [];
//   // 最大的整数，它的平方是小于 9999999 的
//   const maxNum = Math.floor(Math.sqrt(9999999));
//   // 遍历所有小于 sqrt(9999999) 的整数，检查它们的平方
//   for (let i = 1; i <= maxNum; i++) {
//     let square = i * i;
//     // 将数字转换为数组
//     let digits = [];
//     let temp = square;
//     // 提取数字的每一位
//     while (temp > 0) {
//       digits.push(temp % 10);
//       temp = Math.floor(temp / 10);
//     }
//     // 统计每个数字出现的次数
//     let count = Array(10).fill(0);
//     for (let digit of digits) {
//       count[digit]++;
//     }
//     // 检查是否有且仅有两位数字相同
//     let twoEqualCount = 0;
//     for (let c of count) {
//       if (c === 2) twoEqualCount++;
//     }
//     // 如果符合条件，则添加到结果中
//     if (twoEqualCount === 1) {
//       result.push(square);
//     }
//   }
//   return result;
// }

// // 调用函数并输出结果
// console.log(findSpecialSquares());


// function calculateEffectivePrice(orders) {
//     // 将买单和卖单分开
//     let buyOrders = [];
//     let sellOrders = [];
//     // 按价格分配买单和卖单
//     for (let order of orders) {
//         if (order[0] === 'buy') {
//             buyOrders.push([order[1], order[2]]);
//         } else {
//             sellOrders.push([order[1], order[2]]);
//         }
//     }  
//     // 按价格对买单和卖单进行排序
//     buyOrders.sort((a, b) => b[0] - a[0]); // 买单从高到低排序
//     sellOrders.sort((a, b) => a[0] - b[0]); // 卖单从低到高排序
//     // 计算买方和卖方在不同价格下的数量
//     let buyTotal = 0; // 当前所有买单的总数量
//     let sellTotal = 0; // 当前所有卖单的总数量
//     let buyIndex = 0;  // 当前检查的买单索引
//     let sellIndex = 0; // 当前检查的卖单索引
//     let effectivePrice = -1; // 初始成交价无效
//     let maxUnits = 0;  // 当前最大成交数量
//     // 遍历所有卖单价格
//     while (sellIndex < sellOrders.length) {
//         // 处理当前卖单
//         let sellPrice = sellOrders[sellIndex][0];
//         let sellUnit = sellOrders[sellIndex][1];
//         // 更新卖方总数量
//         sellTotal += sellUnit;
//         // 处理买方，买方的价格必须大于等于当前的卖单价格
//         while (buyIndex < buyOrders.length && buyOrders[buyIndex][0] >= sellPrice) {
//             let buyPrice = buyOrders[buyIndex][0];
//             let buyUnit = buyOrders[buyIndex][1];
//             // 更新买方总数量
//             buyTotal += buyUnit;
//             buyIndex++;
//         }
//         // 当前成交价格为当前卖单价格
//         if (buyTotal > sellTotal) {
//             effectivePrice = sellPrice;
//             maxUnits = sellTotal;
//         }
//         // 继续处理下一个卖单
//         sellIndex++;
//     }
//     return { effectivePrice, maxUnits };
// }

// // 示例数据
// const orders = [
//     ['buy', 10, 100],
//     ['sell', 9.9, 80],
//     ['buy', 10.1, 20],
//     ['sell', 9.8, 30],
//     ['sell', 10.1, 50]
// ];

// const result = calculateEffectivePrice(orders);
// console.log("有效成交价:", result.effectivePrice);
// console.log("有效成交数量:", result.maxUnits);



