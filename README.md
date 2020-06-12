# Kintone_Dojo Repository

## Kintone_Dojo Repoの使用方法：
* :warning: このリポジトリは、Kintone_Dojo割り当ての保存にのみ使用されます！ :warning:
  * :zap: Kintone Dojoの講義内容は別のファイルに保存してください。 :zap:
  * これは、gitコマンドの問題がKintone Dojoの講義を妨害しないようにするためです。

* Kintone_Dojoの割り当てを開始する場合：
  1. マスターブランチに **Task** フォルダーを作成します。
     * `$ mkdir Task01`
  2. その時点から、 `develop-task##`というタイトルの新しいブランチを作成します。
     * `$ git checkout -b develop-task01`
  3. コードを記述して、このブランチにコミットします。
     * `$ git add Task01.html Task01.js`
     * `$ git commit -m "Task01 files first draft"`

* コードレビューの準備ができたら
  1. ブランチをGitHubにプッシュします
     * `git push origin develop-task01`
  2. プルリクエストを作成して、 `develop-task ##`ブランチを `master`とマージします。
  3. レビュー担当者を割り当てます

## Demo Video
![](Git_GitHub_Lec/Task_Demo.gif)

## How to use Kintone_Dojo Repo:
* :warning: This repo will only be used for storing Kintone_Dojo assignments! :warning:
  * :zap: Please keep Kintone Dojo lecture content in a separate file. :zap:
  * This is to prevent git command issues from interfering with Kintone Dojo's lectures.

* When starting a Kintone_Dojo assignment:
  1. Create a **Task** folder in the master branch.
     * e.g. `$ mkdir Task01`
  2. Create a new branch from that point titled `develop-task##`.
     * e.g. `$ git checkout -b develop-task01`
  3. Write your code and commit to this branch.
     * e.g. `$ git add Task01.html Task01.js`
     * e.g. `$ git commit -m "Task01 files first draft"`

* When you are ready for a code review
  1. Push the branch to GitHub
     * e.g. `git push origin develop-task01`
  2. Create a pull request to merge the `develop-task##` branch with `master`.
  3. Assign your reviewer

<!-- ## Kintone_Dojo Repoの使用方法：
* 1 - 割り当てごとにフォルダを作成します。 （masterブランチ上）
* 2 - develop-task-`#` ブランチを作成する
  * `#` = タスク番号
  * 例：develop-task-01はタスク番号1用です。
  * 進行中のHTMLおよびJSファイルをここに保存します。
  * Markdown（.md）ファイルとして関連するメモを含めます。
* 3 - コードレビューが必要なときにプルリクエストを行う
  * Sohei や Genjiをタグする。
* 4 - レビューが成功した後
  * develop ブランチをmasterにマージ！ -->

## Other...
This repository will be used to store, track,a and submit the code from the Kintone Dojo JavaScript training course for code review.

# Branches
| master branch | contains the deployed code |
| -- | -- |
| develop branch | contains the code currently working on |


Changes for a pull request example
