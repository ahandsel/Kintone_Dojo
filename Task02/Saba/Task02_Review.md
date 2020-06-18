# Saba's Task02 Review
* Not using the HTML template files given for this assignment
  * JS_task1-1.html JS_task1-2.html JS_task1-3.html
  * Causes an styling issue in 1-3.html's h2 (font is white).
  * Either use the files given or remove the styling for h2.
* 1-2.html
  * Line 170:　Remove the space between `7` and `;`
    * `for (var i = 0; i < 7 ; i++) {`
    * `for (var i = 0; i < 7; i++) {`
  * Line 169: remove the empty line
* 1-3.html
  * Line 177: remove the space between `7` and `;`
* Optional: Use `obj.hasOwnProperty(prop)` method to simply your for loop
  * Refer to the code under the "オブジェクトのプロパティの反復処理" section of the [Object.prototype.hasOwnProperty() documentation](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty#Examples)
* GitHub issue with [Task02 Review | Task02レビュー #4 Pull Request](https://github.com/t-saba/Kintone_Dojo/pull/4)
  * Go to your repository via terminal
    * e.g. `cd ~/Documents/Kintone_Dojo`
  * Go to your "develop-task-2" branch
    * `git checkout develop-task-2`
  * Move your Day2 folder to your another folder
    * `explorer.exe .` to open your current folder with File Explorer
    * Day2/1-1.html
    * Day2/1-2.html
    * Day2/1-3.html
  * By moving the Day2 folder and its files inside, it should fix the GitHub merge conflict issue
    * `git status`
    * If no error, then `git push origin develop-task-2`
    * Refresh GitHub and try to merge the pull request
    * https://github.com/t-saba/Kintone_Dojo/pull/4

---

### SabaさんのTask02レビュー
#### この課題に指定されたHTMLテンプレートファイルを使用していません
  * DojoHW-1
    * JS_task1-1.html JS_task1-2.html JS_task1-3.html
  * そのため、1-3.htmlのh2でスタイルの問題を引き起こします。（フォントは白で見えない）
  * 指定されたファイルを使用するか、h2のスタイルを削除してください。
#### 1-2.html
  * 170行:　`7`と`;`の間のスペースを削除してください。
    * `for (var i = 0; i < 7 ; i++) {`
    * `for (var i = 0; i < 7; i++) {`
  * 169行: 空っぽの行を削除してください。
#### 1-3.html
  * 177行:　`7`と`;`の間のスペースを削除してください。
#### オプション： `obj.hasOwnProperty(prop)`メソッドを使用してforループを単純化する。
  * [Object.prototype.hasOwnProperty() documentation](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty#Examples) の "オブジェクトのプロパティの反復処理" 章以下のコードを参照してください.
### GitHub問題: [Task02 Review | Task02レビュー #4 Pull Request](https://github.com/t-saba/Kintone_Dojo/pull/4)
  * ターミナルからリポジトリに移動します
    * 例 `cd ~/Documents/Kintone_Dojo`
  * 「develop-task-2」ブランチに移動します
    * `git checkout develop-task-2`
  * Day2フォルダーを別のフォルダーに移動する
    * エクスプローラーで現在のフォルダーを開くには `explorer.exe .`
    * Day2/1-1.html
    * Day2/1-2.html
    * Day2/1-3.html
  * Day2フォルダーと内部のファイルを移動することにより、GitHubのマージ競合の問題を修正するはずです。
    * `git status`
    * エラーがなければ、 `git push origin develop-task-2`
    * GitHubを更新し、プルリクエストをマージしてみてください
    * https://github.com/t-saba/Kintone_Dojo/pull/4