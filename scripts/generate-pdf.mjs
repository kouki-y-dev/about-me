import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import MarkdownIt from 'markdown-it';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 対象ファイル定義 (入力Markdown -> 出力PDF)
const TARGET_FILES = [
  { input: 'docs/resume.md', output: 'dist/resume.pdf', title: '職務経歴書' },
  { input: 'docs/cv.md', output: 'dist/cv.pdf', title: '履歴書' }
];

// 環境変数（Secrets）による置換マッピング
function replaceSecrets(markdownContent) {
  let content = markdownContent;

  const secretMappings = {
    'secret-name': process.env.SECRET_NAME,
    'secret-kana': process.env.SECRET_KANA,
    'secret-birthdate': process.env.SECRET_BIRTHDATE,
    'secret-address': process.env.SECRET_ADDRESS,
    'secret-email': process.env.SECRET_EMAIL,
    'secret-phone': process.env.SECRET_PHONE,
    'secret-highschool': process.env.SECRET_HIGHSCHOOL,
    'secret-university': process.env.SECRET_UNIVERSITY,
    'secret-company': process.env.SECRET_COMPANY,
  };

  // 環境変数 SECRET_* から動的に追加マッピング
  for (const [key, value] of Object.entries(process.env)) {
    if (key.startsWith('SECRET_')) {
      const className = key.toLowerCase().replace(/_/g, '-');
      if (value) {
        secretMappings[className] = value;
      }
    }
  }

  // <span class="secret-***">...</span> の中身を置換
  for (const [className, secretValue] of Object.entries(secretMappings)) {
    if (secretValue) {
      const regex = new RegExp(`<span class="${className}">([\\s\\S]*?)<\\/span>`, 'g');
      content = content.replace(regex, `<span class="${className}">${secretValue}</span>`);
    }
  }

  return content;
}

// 完全なHTML文書を生成
function buildFullHtml(bodyHtml, cssContent, title) {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
${cssContent}
  </style>
</head>
<body>
${bodyHtml}
</body>
</html>`;
}

async function main() {
  console.log('🚀 Starting Markdown to HTML/PDF generation...');

  // dist ディレクトリの作成
  const distDir = path.join(rootDir, 'dist');
  await fs.mkdir(distDir, { recursive: true });

  // CSS の読み込み
  const cssPath = path.join(__dirname, 'styles', 'print.css');
  const printCss = await fs.readFile(cssPath, 'utf-8');

  // markdown-it 初期化
  const md = new MarkdownIt({
    html: true,
    breaks: false,
    linkify: true,
  });

  const generatedHtmlFiles = [];

  for (const target of TARGET_FILES) {
    const inputPath = path.join(rootDir, target.input);
    const outputPath = path.join(rootDir, target.output);
    const htmlPreviewPath = outputPath.replace(/\.pdf$/, '.html');

    // ファイル存在チェック
    try {
      await fs.access(inputPath);
    } catch {
      console.warn(`⚠️ Warning: ${target.input} not found. Skipping.`);
      continue;
    }

    console.log(`📄 Processing: ${target.input} -> ${target.output}`);

    // Markdown 読み込み & Secrets 置換
    const rawMarkdown = await fs.readFile(inputPath, 'utf-8');
    const processedMarkdown = replaceSecrets(rawMarkdown);

    // HTML 変換
    const bodyHtml = md.render(processedMarkdown);
    const fullHtml = buildFullHtml(bodyHtml, printCss, target.title);

    // プレビュー用 HTML を dist に保存
    await fs.writeFile(htmlPreviewPath, fullHtml, 'utf-8');
    console.log(`✅ Saved HTML preview: ${htmlPreviewPath}`);

    generatedHtmlFiles.push({ fullHtml, outputPath, title: target.title });
  }

  // Puppeteer による PDF 出力
  try {
    const puppeteer = (await import('puppeteer')).default;
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
    });

    try {
      for (const item of generatedHtmlFiles) {
        const page = await browser.newPage();
        await page.setContent(item.fullHtml, { waitUntil: 'networkidle0' });
        // Webフォントのロード完了を確実に待機
        await page.evaluateHandle('document.fonts.ready');

        await page.pdf({
          path: item.outputPath,
          format: 'A4',
          printBackground: true,
          margin: {
            top: '15mm',
            right: '15mm',
            bottom: '18mm',
            left: '15mm'
          },
          displayHeaderFooter: true,
          headerTemplate: '<div></div>',
          footerTemplate: `
            <div style="font-size: 8pt; color: #888; width: 100%; text-align: right; padding-right: 15mm;">
              <span class="pageNumber"></span> / <span class="totalPages"></span>
            </div>
          `
        });

        await page.close();
        console.log(`✅ Successfully generated PDF: ${item.outputPath}`);
      }
    } finally {
      await browser.close();
    }
    console.log('🎉 All PDFs generated successfully!');
  } catch (err) {
    if (process.env.CI) {
      console.error('❌ Puppeteer PDF export failed in CI:', err);
      process.exit(1);
    } else {
      console.warn('\n⚠️ [Note for Local Environment]');
      console.warn('Puppeteer browser launch failed (likely due to missing Linux GUI shared libraries).');
      console.warn('✅ HTML previews (dist/*.html) were successfully generated for local inspection.');
      console.warn('In GitHub Actions (CI), full PDF generation will run automatically in the standard container.\n');
    }
  }
}

main().catch((err) => {
  console.error('❌ Fatal error:', err);
  process.exit(1);
});
