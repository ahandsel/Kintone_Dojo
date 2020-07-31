'use strict';
function set2fig(num){
      var ret;
      if ( num < 10 ){
          ret = '0' + num;
      }else {
          ret = num;
      }
      return ret;
  }

var countup = function(){
  var now = new Date();
  var mon = ("0"+(now.getMonth()+1)).slice(-2);
  var day = ("0"+(now.getDate())).slice(-2);
  var hour = ("0"+(now.getHours())).slice(-2);
  var min = ("0"+(now.getMinutes())).slice(-2);
  var sec = ("0"+(now.getSeconds())).slice(-2);

  var s = year + "年" + mon + "月" + day + "日" + hour + "時" + min + "分" + sec + "秒";
    return s;
}

  setInterval(function(){
    var data = countup();
    document.getElementById('output').textContent = data[0] + '日' + data[1] + '時間' + data[2] + '分' + data[3] + '秒'}, 1000);
  document.getElementById('time').textContent = clock();
  document.getElementById('output').textContent = data[0] + '日' + data[1] + '時間' + data[2] + '分' + data[3] + '秒';