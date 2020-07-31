'use strict';

// Zero Padding
function addZero(num) {
  if (num < 10) {
    num = '0' + num;
  }
  return num;
}

// improved countup
function nowTime() {
  var now = new Date();
  var year = now.getFullYear();
  var month = addZero(now.getMonth());
  var day = addZero(now.getDate());
  var hr = addZero(now.getHours());
  var min = addZero(now.getMinutes());
  var sec = addZero(now.getSeconds());
  var nowFull = year + '年' + month + '月' + day + '日' + hr + '時' + min + '分' + sec + '秒';
  return nowFull;
}

// Outputting to HTML
var output = document.getElementById('output');

// Run the code every second
setInterval(function () {
  output.textContent = nowTime();
}, 1000);

// Declare it once without delay
output.textContent = nowTime();