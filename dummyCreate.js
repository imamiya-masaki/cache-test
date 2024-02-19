const fs = require('fs');
const path = require('path');

// 生成するJavaScriptファイルの行数
const numLines = 100000; // この数値を調整して、ファイルのサイズを変更できます

// 生成するファイルのパス
const filePath = path.join(__dirname, 'largeExample.js');

// ファイルの内容を生成
let content = '// これは自動生成された大きなJavaScriptファイルです\n';

content += 'window.dummyFunction = function(message) {\n';

for (let i = 0; i < numLines; i++) {
    content += `console.log("ダミーデータ ${i}: ${Math.random()}");\n`;
}

content += '};\n\n';

// ファイルを書き込み
fs.writeFile(filePath, content, (err) => {
    if (err) throw err;
    console.log(`${filePath} が生成されました。`);
});
