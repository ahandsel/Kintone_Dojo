

















































    'use strict';
    // querySelectorAllでチェックボックスの状態を定義
    var checkbox_status = document.querySelectorAll('input[type="checkbox"]');
    // ユーザー数、ギガ数の状態を定義
    var select_status = document.querySelectorAll('select'); //箱を指定する
    // console.log('select_status' + select_status);
    // console.log(select_status);
    // 「クリックされたとき」をstatusとする → 以下2行を定義してしまうとチェックボックスを押した瞬間に下のfunctionが実行されてしまう
    // secure.onclick = math;
    // disk.onclick = math;
    // math_button.onclick = math;
    // 計算開始
    function math() {
      // ★↓ここに初期金額を定義。これがfunction外にあると、function内の250円と1000円が繰り返し3900円に足されていく一方となる。
      var month_fee = 3900;
      // チェックボックスにチェックされたとき、の状態を定義
      var secure_check = checkbox_status[0].checked;
      var disk_check = checkbox_status[1].checked;
      // セレクトボックスで数値が選ばれたとき、を定義  
      var secure_select = select_status[0].value; //ユーザーの1～5
      var disk_select = select_status[1].value; //GBの1～5
      // ↓このコンソールはインプットの確認
      // console.log('secure_select' + secure_select);
      // console.log('disk_select' + disk_select);
      // チェックされたときの動き
      if (secure_check === true) {
        month_fee += 250 * secure_select; //→ここに選んだ数値を使いたい
        // console.log('month_fee = ' + month_fee);
      }
      if (disk_check === true) {
        month_fee += 1000 * disk_select;
        // console.log('disk_select = ' + disk_select);
      }
      // ★function内で出した結果をfunction外で使いたいときは結果をreturnしないと使えない。→returnしたくないときはfunctionの中に入れる。
      // ↓このコンソールはアウトプットの確認
      // console.log(month_fee);
      // HTMLのpriceの値を変更する
      document.getElementById('price').textContent = month_fee;
    };