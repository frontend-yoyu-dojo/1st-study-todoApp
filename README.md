# 課題 1. TODO アプリを作ろう！

## 仕様

- CRUD 機能
- localStorage をつかう

## GOOD

- とりあえず動くところまで試しにでも完成させたこと

## BAD

### 設計

    * 「とりあえず動くものを作る」のではなく、事前にどのような設計でつくるか考えてから実装する

- コードの相談を全然しなかったこと；；

### addEventListener 全然使えてなかったこと

#### html に onclick 使っちゃダメ

> 参考資料 : [ちゃんと知ってる？JavaScript のイベントバブリングを学ぼう](https://www.webprofessional.jp/event-bubbling-javascript/)

```js
window.addEventListener("click", () => {
  // 処理
});
```

> 参考資料 : [インラインイベントハンドラー使っちゃだめ](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks/Events#%E3%82%A4%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%83%8F%E3%83%B3%E3%83%89%E3%83%A9%E3%83%BC_%E2%80%94_%E4%BD%BF%E3%81%A3%E3%81%A1%E3%82%83%E3%81%A0%E3%82%81)

- window.onload もよくない
  \*addEventListener つかってこー！

```js
window.addEventListener("load", e => {
  // 処理
});
```
