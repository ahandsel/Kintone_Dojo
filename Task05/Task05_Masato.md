# Masato | [Task05 Code Review](https://github.com/masatonaut/Kintone_Dojo_3/pull/12)

## 日本版
* [ ] 5行: `=`と`$`の間にスペースを追加してください. `var zipCode = $('#zipCode').val();`
* [ ] 6,8行: 空行を削除
* [ ] 4 ~ 30行: インデントを2つのスペースに変更しましょう。（現在は4つのスペース）
* [ ] 19行: インデントがたりない
* [ ] 15行: ユーザーが必要としない場合は、 `console.log();`をコメント化しましょう。
* [ ] 29行: Missing semicolon (`;`)
* [ ] 25行: 25行と26行を合体してください。
* [ ] 26行: Since you are not using `xhr` parameter, please remove it
* [ ] 13行: 13行と14行を合体してください。
* [ ] 27行: `error` が定義されていないため、トリガーされたときに次のエラーメッセージが表示されます: `Uncaught ReferenceError: error is not defined`
  * 直し方: `console.log('住所の検索に失敗しました');`
  * ただし、ユーザーに影響を与えるエラーがあるため、代わりに `window.alert()` を使用しましょう。

#### エラー処理：
* 今の状態だと、以下のようなケースなどでもAPIが実行されるので、ハンドリングできている状態が好ましいです！
* ケース例 )
  * [ ] inputでtextが空の時 -> 北海道札幌の情報が取れている
  * [ ] inputでhogeと入力 -> console上でエラーが発生
* こういったエラーケースをハンドリングして.window.alertなどでリアクションを返してあげてください！

これら2つのエラー処理についてサポートが必要な場合は、お知らせください〜

現在のscript.jsと再フォーマットされたバージョンのフォーマットの違いを確認してください。
![Task05/Task05_Masato_Compare.png](https://github.com/ahandsel/kintone_dojo/raw/master/Task05/Task05_Masato_Compare.png)


---
#### Error Handling (English)
  * If the search is done without a ZIP Code input, the API is called and the website displays information on Sapporo, Hokkaido. Instead, please create an alert asking for input.
  * If random text is inputted, (e.g. "Panda"), then an API call is made and no error message appears.

If you need help with these two error handlings, please let me know ~