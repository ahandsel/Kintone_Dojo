# Saba | [Tak05 Code Review](https://github.com/t-saba/Kintone_Dojo/pull/10)

## 日本版
* [ ] 5、8行：空行を削除
* [ ] 7行：console.log（）をコメントか削除しましょう。
#### エラー処理：
* 今の状態だと、以下のようなケースなどでもAPIが実行されるので、ハンドリングできている状態が好ましいです！
* ケース例 )
  * [ ] inputでtextが空の時 -> 北海道札幌の情報が取れている
  * [ ] inputでhogeと入力 -> console上でエラーが発生
* こういったエラーケースをハンドリングして.window.alertなどでリアクションを返してあげてください！

これら2つのエラー処理についてサポートが必要な場合は、お知らせください〜

---

## English
* Line 5, 8: Delete empty lines
* Line 7: Delete or comment out the console.log()
#### Error Handling:
  * If the search is done without a ZIP Code input, the API is called and the website displays information on Sapporo, Hokkaido. Instead, please create an alert asking for input.
  * If random text is inputted, (e.g. "Panda"), then an API call is made and no error message appears.

If you need help with these two error handlings, please let me know ~

* 
* 北海道札幌の情報が取れている


今の状態だと、以下のようなケースなどでもAPIが実行されるので、ハンドリングできている状態が好ましいです！
ケース例 )
inputでtextが空の時 -> 北海道札幌の情報が取れている
inputでhogeと入力 -> console上でエラーが発生

こういったエラーケースをハンドリングして.window.alertなどでリアクションを返してあげてください！

