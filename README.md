<div align="center">

# About Me for Kouki_Y

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Site-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white)](https://kouki-y-dev.github.io/about-me/)
[![CI - Docs Quality Check](https://img.shields.io/github/actions/workflow/status/kouki-y-dev/about-me/quality.yml?label=Docs%20Quality&style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/kouki-y-dev/about-me/actions/workflows/quality.yml)
[![CI/CD - PDF Export & Sync](https://img.shields.io/github/actions/workflow/status/kouki-y-dev/about-me/export-pdf.yml?label=PDF%20Export%20%26%20Sync&style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/kouki-y-dev/about-me/actions/workflows/export-pdf.yml)

<br />

[![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![textlint](https://img.shields.io/badge/textlint-checked-blue?style=flat-square&logo=textlint&logoColor=white)](https://textlint.github.io/)
[![Husky](https://img.shields.io/badge/Husky-pre--commit-8B5CF6?style=flat-square&logo=husky&logoColor=white)](https://typicode.github.io/husky/)
[![Agent Skill](https://img.shields.io/badge/Agent%20Skill-proofread--docs-8A2BE2?style=flat-square&logo=robotframework&logoColor=white)](.agents/skills/proofread-docs/SKILL.md)
[![Puppeteer](https://img.shields.io/badge/Puppeteer-v24-00D8A2?style=flat-square&logo=puppeteer&logoColor=white)](https://pptr.dev/)
[![Google Drive API](https://img.shields.io/badge/Google%20Drive-API%20v3-4285F4?style=flat-square&logo=googledrive&logoColor=white)](https://developers.google.com/drive)
[![Markdown](https://img.shields.io/badge/Markdown-Single%20Source-000000?style=flat-square&logo=markdown&logoColor=white)](https://www.markdownguide.org/)
[![Author](https://img.shields.io/badge/Author-kouki--y--dev-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/kouki-y-dev)

</div>

自己紹介・職務経歴書・履歴書の一元管理リポジトリです。  
Markdown を正本として、GitHub Pages での Web 公開と、GitHub Actions による提出用 PDF の自動生成・Google Drive 同期を行っています。

---

## 公開ページ

`docs/` 配下の Markdown ファイルは、GitHub Pages で公開されています（個人情報はマスク処理済み）。

- サイト URL: [https://kouki-y-dev.github.io/about-me/](https://kouki-y-dev.github.io/about-me/)

| ページ | ソースファイル | 内容 |
| :--- | :--- | :--- |
| [About Me (Top)](https://kouki-y-dev.github.io/about-me/) | [`docs/index.md`](docs/index.md) | 自己紹介、仕事のスタンス・価値観、スキル概要 |
| [職務経歴書 (Resume)](https://kouki-y-dev.github.io/about-me/resume) | [`docs/resume.md`](docs/resume.md) | 職務要約、実務プロジェクト詳細、技術スタック |
| [履歴書・プロフィール (CV)](https://kouki-y-dev.github.io/about-me/cv) | [`docs/cv.md`](docs/cv.md) | 基本情報サマリ、学歴、職歴一覧、保有資格 |
| [パーソナルデータ (Personal)](https://kouki-y-dev.github.io/about-me/personal) | [`docs/personal.md`](docs/personal.md) | 性格、仕事のスタンス・価値観、キャリアプラン |
| [スキル詳細 (Skills)](https://kouki-y-dev.github.io/about-me/skills) | [`docs/skills.md`](docs/skills.md) | 各技術スタックの習熟度、得意領域、経験の浅い領域 |

---

## 特徴

- **正本の一元管理**: `docs/` 配下の Markdown をマスターデータとして管理し、Web 公開と PDF 出力で二重管理を防ぎます。
- **個人情報の安全なマスキング**: Web 公開時は個人情報を伏せ、提出用 PDF 出力時に GitHub Secrets から実データを自動注入します。
- **PDF 自動生成 & Google Drive 同期**: GitHub Actions 上で A4 印刷向け PDF を生成し、Google Drive の同一ファイルへ上書き同期します（共有リンクを変更せずに更新可能）。
- **textlint & CI による品質担保**: pre-commit（husky）および GitHub Actions で校正ルールを実行し、誤字脱字や表記揺れを防止します。

---

## ディレクトリ構成

```text
.
├── .agents/                      # AI エージェント用設定
│   └── skills/
│       └── proofread-docs/       # マークダウン校閲スキル
│           └── SKILL.md
├── .github/
│   └── workflows/
│       ├── export-pdf.yml        # PDF 生成 & Google Drive 同期ワークフロー
│       └── quality.yml           # ドキュメント品質チェック（CI）ワークフロー
├── docs/                         # マークダウン正本（GitHub Pages 対象）
│   ├── index.md                  # ポートフォリオトップ（自己紹介・価値観・目次）
│   ├── resume.md                 # 職務経歴書
│   ├── cv.md                     # 履歴書・プロフィール詳細
│   ├── personal.md               # パーソナルデータ・価値観
│   └── skills.md                 # スキル詳細・習熟度
├── scripts/
│   ├── generate-pdf.mjs          # Markdown -> Secrets置換 -> A4 PDF 生成スクリプト
│   ├── upload-drive.mjs          # Google Drive API 最新1ファイル上書きスクリプト
│   └── styles/
│       └── print.css             # A4 印刷・PDF 出力用スタイルシート
├── .textlintrc.json              # textlint ルール設定ファイル
├── dist/                         # 生成された PDF / プレビュー用 HTML（.gitignore 対象）
├── package.json
└── README.md
```

---

## CI/CD ワークフロー

GitHub Actions で 2 つのワークフローを運用しています。

| ワークフロー | 定義ファイル | トリガー条件 | 処理内容 |
| :--- | :--- | :--- | :--- |
| **Docs Quality Check** | [`.github/workflows/quality.yml`](.github/workflows/quality.yml) | `docs/**/*.md` 等の変更時（Push / PR） | Node.js 22 環境で `textlint` を実行し、構文・表記揺れを検証 |
| **Export PDF & Sync** | [`.github/workflows/export-pdf.yml`](.github/workflows/export-pdf.yml) | `main` ブランチへの Push / 手動実行 | 個人情報を注入した提出用 PDF を生成し、Google Drive へ同期 |

---

## 個人情報の置換仕様

Markdown（`docs/resume.md`、`docs/cv.md`）内に以下の HTML タグを記述しておくと、Web 上では自然に表示され、PDF 出力時に GitHub Secrets（または環境変数）の値へ自動置換されます。

| HTML タグ | Web (Pages) での表示例 | 置換される環境変数 / Secrets |
| :--- | :--- | :--- |
| `<span class="secret-name">...</span>` | ニックネーム | `SECRET_NAME`（本名） |
| `<span class="secret-kana">...</span>` | ニックネームのフリガナ | `SECRET_KANA`（本名フリガナ） |
| `<span class="secret-address">...</span>` | 都道府県のみ（例: 東京都） | `SECRET_ADDRESS`（番地・建物名を含む現住所） |
| `<span class="secret-email">...</span>` | 公開用メールアドレス | `SECRET_EMAIL`（提出用メールアドレス） |
| `<span class="secret-phone">...</span>` | 非公開 | `SECRET_PHONE`（電話番号） |
| `<span class="secret-highschool">...</span>` | 某高校 | `SECRET_HIGHSCHOOL`（出身高校・学科） |
| `<span class="secret-university">...</span>` | 某公立大学 | `SECRET_UNIVERSITY`（出身大学・学部学科） |
| `<span class="secret-company">...</span>` | 某株式会社 | `SECRET_COMPANY`（所属会社名） |

※ 環境変数が設定されていない場合（ローカル実行時など）は、タグ内のデフォルト値がそのまま使用されます。

---

## ローカルでの実行

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 文章校正 (textlint)

```bash
# docs/ 配下のマークダウンをチェック
npm run lint

# 自動修正可能なエラーを一括修正
npm run lint:fix
```

husky と lint-staged により、`git commit` 実行時にステージングされた `docs/**/*.md` に対して自動で `textlint --fix` が走ります。

### 3. PDF 生成

```bash
# デフォルト値（公開用情報）のまま PDF を生成
npm run pdf

# 個人情報環境変数を指定して PDF を生成（テスト用）
SECRET_NAME="山田 太郎" SECRET_ADDRESS="東京都千代田区1-1-1" npm run pdf
```

生成された PDF および HTML プレビューは `dist/` に出力されます：
- **職務経歴書 (提出用・Secrets置換あり)**: `dist/resume.pdf` / `dist/resume.html`
- **職務経歴書 (公開用・Secrets置換なし)**: `dist/resume-public.pdf` / `dist/resume-public.html`
- **履歴書 (提出用・Secrets置換あり)**: `dist/cv.pdf` / `dist/cv.html`
- **履歴書 (公開用・Secrets置換なし)**: `dist/cv-public.pdf` / `dist/cv-public.html`

---

## 文章校正 (textlint) の設定方針

応募書類としての品質維持のため、技術文書向け標準プリセット（`textlint-rule-preset-ja-technical-writing`）をベースにしつつ、職務経歴書の文脈に合わせて調整しています。

- **緩和しているルール**:
  - 敬体（です・ます）と常体（である・体言止め）の混在許容
  - 助詞「の」の連続許容
  - 1文の長さ制限緩和（最大180文字）
  - 読点（、）の個数緩和（最大5個）
  - 専門用語や資格名での漢字連続長制限の無効化
- **有効にしているルール**:
  - ら抜き言葉・二重否定・二重接続詞の防止
  - macOS 等で生じる濁点・半濁点の分離（NFD）の検知・修正
  - 半角カナの混入防止

詳細な設定値は [`.textlintrc.json`](.textlintrc.json) を参照してください。

---

## ドキュメント校閲スキル (Agent Skill)

AI アシスタント向けに、ドキュメント校閲用の Agent Skill ([`.agents/skills/proofread-docs/SKILL.md`](.agents/skills/proofread-docs/SKILL.md)) を同梱しています。
経歴の実績・主張や個人情報タグを崩さずに、文章の推敲と textlint チェックを安全に行うための手順が定義されています。

---

## セットアップ (Google Drive / GitHub Secrets)

### 1. Google Cloud & Google Drive の準備

1. [Google Cloud Console](https://console.cloud.google.com/) でプロジェクトを作成します。
2. **Google Drive API** を有効化します。
3. **「IAM と管理」>「サービス アカウント」** でサービスアカウントを作成し、JSON キーを発行・ダウンロードします。
4. Google Drive 上に職務経歴書を保存するフォルダを作成します。
5. 作成したフォルダの共有設定で、サービスアカウントのメールアドレス（`xxx@xxx.iam.gserviceaccount.com`）を「編集者」として追加します。
6. フォルダ URL からフォルダ ID（`https://drive.google.com/drive/folders/<FOLDER_ID>` の末尾部分）を取得します。

### 2. GitHub Secrets の登録

リポジトリの **Settings** > **Secrets and variables** > **Actions** に以下を登録します。

**Google Drive 連携**
- `GDRIVE_SERVICE_ACCOUNT_KEY`: サービスアカウント JSON の中身（全文）
- `GDRIVE_FOLDER_ID`: アップロード先フォルダ ID

**提出用個人情報**
- `SECRET_NAME`: 本名（例: `山田 太郎`）
- `SECRET_KANA`: フリガナ（例: `ヤマダ タロウ`）
- `SECRET_ADDRESS`: 正式な住所（例: `東京都千代田区〇〇 1-2-3 マンション名101`）
- `SECRET_EMAIL`: 提出用メールアドレス
- `SECRET_PHONE`: 提出用電話番号（例: `090-1234-5678`）
- `SECRET_HIGHSCHOOL`: 高校名・学科（例: `〇〇県立△△高等学校 情報処理科`）
- `SECRET_UNIVERSITY`: 大学名・学部学科（例: `〇〇大学 △△学部 □□学科`）
- `SECRET_COMPANY`: 会社名（例: `株式会社〇〇`）
