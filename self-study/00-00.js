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

//     // 递归排序左右两个子数组，并连接起来
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

function A(){}
function B(){}
A.prototype = new B()
let o = new A()
console.log(o instanceof B);


