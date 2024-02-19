const express = require('express');
const app = express();
const path = require('path');

// キャッシュ関連のヘッダーを設定するカスタムミドルウェア
function setCacheHeaders(req, res, next) {
  if (req.path.endsWith('largeExample.js')) {
    // 特定のJavaScriptファイルに対してキャッシュ制御ヘッダーを設定
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.setHeader('Expires', '0');
    res.setHeader('Surrogate-Control', 'no-store');
  }
  next();
}

// カスタムミドルウェアを全てのリクエストに適用
app.use(setCacheHeaders);

// 静的ファイルの提供（HTML, JS, CSSなど）
app.use(express.static(path.join(__dirname, 'public')));

// ルートエンドポイントでHTMLファイルを提供
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// サーバーを起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
