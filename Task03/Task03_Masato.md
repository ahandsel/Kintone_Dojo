# Task03 | Masato | 5-02-time.html

## 機能の問題
* 次のエラーメッセージを受け取りました：
  * `Uncaught ReferenceError: displaytime is not defined at 5-02-time.html:101`
* `displaytime` という名前の関数がないため、エラーが発生しました.
* [ ] 101行目: `countup` という名前の関数を宣言しのでおそらく`displaytime`じゃあなく`countup`とタイプしたかったじゃあないのですか？
* Task03の詳細（以下に提供）は `hh：mm：ss`形式のライブ時間を要求するため、次のようにしてください：
  * [ ] 年の部分を時間の部分から分離するか、年のセクションを削除してください
  * [ ] 時間を　`hh：mm：ss`　形式で表示します
  * [ ] 表示された情報をリアルタイムで更新 ([`setinterval`](https://ja.javascript.info/settimeout-setinterval))

## フォーマットの問題：
* [ ] 96行目：セミコロンがない（ `;`）
* [ ] 91行目：空行を削除
* [ ] 93、95行目：不要な場合はコメント化されたコードを削除
* [ ] 99行目： `innerHTML`ではなく`textContent`を使用しましょう

## Task03の詳細：
# 課題03
以下の処理を記載した 5-02-time.html を作成する
* 現在時刻がリアルタイムで表示（hh:mm:ss）。カウントアップされていく。
* ファイルを読み込んだ瞬間から動くようにする
* 0詰めする

---

## Functionality Problems:
* Received the following error message:
  * Uncaught ReferenceError: displaytime is not defined at 5-02-time.html:101
* Looks like you have typed `displaytime` while meaning to type `countup` since you have declared a function named `countup` and there is no function named `displaytime`.
* Since the Task03 steps (provided below) asks for a live time in `hh:mm:ss` format, please do the following:
  * Either separate the year information from the time information or delete the year section
  * Display the time in `hh:mm:ss` format
  * Update the displayed information in real-time ([`setinterval`](https://javascript.info/settimeout-setinterval))

## Formatting Problems:
* Line 96: Missing semicolon (`;`)
* Line 91: Delete empty line
* Line 93, 95: Delete commented out code if not needed
* Line 99: Use `textContent` instead of `innerHTML`

## Task03 Details:
Create `5-02-time.html` that does the following:
* Displays the current time in real-time (i.e. live) in (hh:mm:ss) format.
  * It will be counted up.
* Make it work from the moment the HTML file is read
* Zero padding: Add 0 in front of single digits