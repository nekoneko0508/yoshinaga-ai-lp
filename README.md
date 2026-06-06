# 中小企業AIプロデューサー LP

「中小企業AIプロデューサー」公式LPの静的サイトです。

## 構成

- `index.html`: LP本体
- `style.css`: デザイン、レスポンシブ対応
- `script.js`: スマホメニュー、問い合わせリンク設定
- `assets/hero-consultation.png`: ファーストビュー画像

## 問い合わせURLの差し替え

`script.js` の先頭にある `contactUrl` を、Googleフォームや問い合わせフォームのURLに変更してください。

```js
const contactUrl = "https://example.com/contact-form";
```

現在は仮で `#contact` にリンクしています。

## GitHub Pagesで公開する方法

1. このフォルダの内容をGitHubリポジトリにアップロードします。
2. GitHubのリポジトリ画面で `Settings` を開きます。
3. 左メニューの `Pages` を開きます。
4. `Build and deployment` の `Source` で `Deploy from a branch` を選びます。
5. `Branch` で `main`、フォルダで `/root` を選び、保存します。
6. 数分後に表示されるURLへアクセスするとLPが公開されます。

## ローカル確認

静的サイトなので、`index.html` をブラウザで開くだけで確認できます。

ローカルサーバーで確認する場合は、このフォルダで以下を実行してください。

```bash
python3 -m http.server 8000
```

その後、ブラウザで `http://localhost:8000` を開きます。
