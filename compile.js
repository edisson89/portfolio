const pug = require('pug');
const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'views');
const distPath = path.join(__dirname, 'dist');

fs.readdirSync(srcPath).forEach(file => {
  if (path.extname(file) === '.pug') {
    const pugFilePath = path.join(srcPath, file);
    const htmlFilePath = path.join(distPath, path.basename(file, '.pug') + '.html');
    const compiledHtml = pug.renderFile(pugFilePath);
    fs.writeFileSync(htmlFilePath, compiledHtml);
  }
});
