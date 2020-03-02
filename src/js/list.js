// var form=document.getElementById("login");
// var number=document.getElementById('number');
// var username=document.getElementById('username');
// var pass=document.getElementById('password');
// // console.log(pass)
// form.onsubmit=function(e){
//     e=e || window.event;
//     e.preventDefault()
//     // 获取输出的内容
//     var nVal=number.value;
//     var uVal=username.value;
//     var pVal=pass.value;
// // 发送一个ajax请求
// var xhr = new XMLHttpRequest()

// // 4-2. 配置本次请求的信息
// xhr.open('POST', '/gx')

// // 4-3. 接受响应
// xhr.onload = function () {
//   console.log(xhr.responseText)
// }

// // 4-4. 设置请求头
// xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')

// // 4-5. 发送请求
// //      在 () 里面携带参数
// // xhr.send('username=' + uname + '&password=' + upass)
// xhr.send(`number=${nVal}&username=${uVal}&password=${pVal}`)
// }

