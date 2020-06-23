# Saba | [Tak04 Code Review](https://github.com/t-saba/Kintone_Dojo/pull/9#pullrequestreview-434594174)

## JS_task2-1.html | 日本語
* [ ] 65行の後に： `status（）`関数を呼び出します。
  * ズームコーディングセッションでこれについて言及するのを忘れていましたが、 作成するすべての関数を常に呼び出すことが重要です。
  * この要件を満たすには、 `status（）;` のように下部に行を追加するだけです。
* [ ] 51、52、62行：テストに使用した `console.log（）` をコメント化または削除します。


## JS_task2-2_1.html |英語
* コードが機能します！わーい！しかし、かなりの数のフォーマットの問題があります。ほとんどは、間隔とインデントの不一致です。以下の写真でそれらすべてを見ることができます。
* [ ] 51〜89行：1インデント文シフトします（各行の2つのスペースを削除します）。
  * `Ctrl` + `[` のキーボードショートカットを使用して行のインデントを削除
* [ ] 55、70、71行：コードとコメントの間にスペースを1つだけ入れてください。
* [ ] 73、74行：コメントとテキストの間にスペースを1つだけ入れます。
  * `// console.log`->` // console.log`
* [ ] 73、74、77、78、81、82、86行：インデントの一貫性を保ちます。
* [ ] 89、69行：末尾のスペースを削除。

![](https://github.com/ahandsel/kintone_dojo/raw/master/Task04/Task04_Saba/Part2_Format_Issues.png)

---
---

## JS_task2-1.html | English
* After Line 65: Call `status()` function.
  * I forgot to mention this during our Zoom coding session however it is important to always call every function you make. Simply add a line at the bottom like `status();` to fulfill this requirement.
* Line 51, 52, 62: Comment out or delete `console.log()`s used for your testing.

## JS_task2-2_1.html | English
* Your code works! Yay! But there are quite a few formatting issues. Most are inconsistencies in spacing and indenting. You can see all of them in the photo below.
* Line 51 to 89: Shift by 1 indentation (remove 2 spaces on each line).
  * `Ctrl` + `[`  行のインデントを削除
* Line 55, 70, 71: Only have 1 space between your code and comment.
* Line 73, 74: Only have one space between the comment and text.
  * `  //   console.log` --> `    // console.log`
* Line 73, 74, 77, 78, 81, 82, 86: keep the indentation consistent.
* Line 89, 69: Remove trailing space