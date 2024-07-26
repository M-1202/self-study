// 死循环指定的事件
function delay(duration){
    let start = Date.now();
    while (Date.now() - start < duration){}
}
