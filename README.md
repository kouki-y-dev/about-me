# 📄 About Me for Kouki_Y

<div align="center">

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

転職活動を見据えた **自己紹介・職務経歴書・履歴書の一元管理リポジトリ** です。  
Markdownから **GitHub Pages による Web 公開** と **GitHub Actions による提出用 PDF の自動生成 & Google Drive 同期** を実現しています。

---

## 🌐 公開サイト - GitHub Pages

`docs/` ディレクトリ配下の Markdown ファイルは、GitHub Pages を通じて Web 上に公開されています（個人情報は安全にマスクされています）。

🔗 **Web サイト URL**: **[https://kouki-y-dev.github.io/about-me/](https://kouki-y-dev.github.io/about-me/)**

| ページ | ソースファイル | 内容 |
| :--- | :--- | :--- |
| 🏠 **[About Me (Top)](https://kouki-y-dev.github.io/about-me/)** | [`docs/index.md`](file:///home/user/github/about-me/docs/index.md) | 自己紹介、仕事のスタンス・価値観、スキルセット概要、各種リンク |
| 💼 **[職務経歴書 (Resume)](https://kouki-y-dev.github.io/about-me/resume)** | [`docs/resume.md`](file:///home/user/github/about-me/docs/resume.md) | 職務要約、実務プロジェクト詳細、技術スタック |
| 📋 **[履歴書・プロフィール (CV)](https://kouki-y-dev.github.io/about-me/cv)** | [`docs/cv.md`](file:///home/user/github/about-me/docs/cv.md) | 基本情報サマリ、学歴、職歴一覧、保有資格 |

---

## 🌟 特徴・設計思想

1. **正本の一元管理**:
   - `docs/` 配下の Markdown ファイルをマスターデータとして管理し、二重管理を防ぎます。
2. **GitHub Pages での安全な公開**:
   - [https://kouki-y-dev.github.io/about-me/](https://kouki-y-dev.github.io/about-me/) にて Web 公開。
   - 個人情報（本名・詳細住所・電話番号等）をマスクした状態でポートフォリオ・職務経歴書を Web 上で共有可能です。
3. **提出用 PDF の自動生成 & Google Drive 同期**:
   - GitHub Actions 上で GitHub Secrets から個人情報を安全に注入し、A4 最適化された提出用 PDF を自動生成します。
   - Google Drive の指定フォルダ内に **常に最新バージョンの 1 ファイルとして上書き同期** します（Google Drive の共有リンク URL を変えずに更新可能）。
4. **textlint & CI による文章品質担保**:
   - 履歴書・職務経歴書特有の文脈に最適化したルールセットで、誤字脱字・ら抜き言葉・濁点分離などを自動チェックします。
   - Git コミット時（pre-commit）および GitHub Actions（CI）での自動検証により、常に品質を維持します。
5. **AI エージェントスキルによる安全な校閲**:
   - 専用の Agent Skill (`proofread-docs`) により、AI アシスタントが主張や事実関係を崩さずに高品質な文章校正・推敲を行います。

---

## 📁 ディレクトリ構成

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
├── docs/                         # 【公開用マークダウン（正本 / GitHub Pages 対象）】
│   ├── index.md                  # ポートフォリオトップ（自己紹介・価値観・目次）
│   ├── resume.md                 # 職務経歴書
│   └── cv.md                     # 履歴書・プロフィール詳細
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

## 🔄 CI/CD ワークフロー (GitHub Actions)

本リポジトリでは、ドキュメントの品質担保と自動配信のために 2 つの GitHub Actions ワークフローを運用しています。

| ワークフロー | 定義ファイル | トリガー条件 | 主な処理内容 |
| :--- | :--- | :--- | :--- |
| 📋 **Docs Quality Check** | [`.github/workflows/quality.yml`](.github/workflows/quality.yml) | `docs/**/*.md` や設定ファイルの変更時（Push / PR） | Node.js 22 環境で `textlint` を実行し、Markdown の文法・表記揺れ・誤字脱字を CI 上で自動検証 |
| 🚀 **Export PDF & Sync** | [`.github/workflows/export-pdf.yml`](.github/workflows/export-pdf.yml) | `main` ブランチへの Push（`docs/`、`scripts/` 等）/ 手動実行 (`workflow_dispatch`) | GitHub Secrets から個人情報を注入した A4 提出用 PDF を自動生成し、Google Drive へ最新版として上書き同期 |

---

## 🔒 個人情報置換タグの仕様

Markdown（`docs/resume.md` や `docs/cv.md`）内に以下の HTML タグを記述しておくと、Web 上では自然に表示され、CI/CD で PDF を出力する際に GitHub Secrets の値へ自動置換されます。

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

※ 環境変数が設定されていない場合（ローカルプレビュー時など）は、タグ内に記述されたデフォルト値がそのまま使用されます。

---

## 💻 ローカルでの実行・プレビュー方法

### 1. 依存関係のインストール
```bash
npm install
```

### 2. 文章校正（textlint）
```bash
# docs/ 配下のマークダウンをチェック
npm run lint

# 自動修正可能なエラーを一括修正
npm run lint:fix
```
> [!NOTE]
> **Git コミット時および CI での自動品質チェック**
> - **ローカル (pre-commit)**: `husky` と `lint-staged` が設定されているため、`git commit` 実行時に変更（ステージング）された `docs/**/*.md` に対して自動で `textlint --fix` が実行されます。
> - **CI (GitHub Actions)**: `Docs Quality Check` ワークフローにより、Pull Request 作成時やブランチ Push 時に CI 上でも textlint による検証が自動実行されます。


### 3. PDF 生成（ローカル実行）
```bash
# デフォルト値（公開用情報）のまま PDF を生成
npm run pdf

# 個人情報環境変数を指定して PDF を生成（テスト用）
SECRET_NAME="山田 太郎" SECRET_ADDRESS="東京都千代田区1-1-1" npm run pdf
```

生成された PDF および HTML プレビューは `dist/` ディレクトリに出力されます：
- **職務経歴書 (提出用・Secrets置換あり)**: `dist/resume.pdf` / `dist/resume.html`
- **職務経歴書 (公開用・Secrets置換なし)**: `dist/resume-public.pdf` / `dist/resume-public.html`
- **履歴書 (提出用・Secrets置換あり)**: `dist/cv.pdf` / `dist/cv.html`
- **履歴書 (公開用・Secrets置換なし)**: `dist/cv-public.pdf` / `dist/cv-public.html`

---

## 📝 文章校正 (textlint) の仕様

応募書類やポートフォリオとしての品質維持（誤字脱字・ら抜き言葉・不自然な濁点分離の検知など）を目的として、[textlint](https://textlint.github.io/) を導入しています。

### ルール設定 (`.textlintrc.json`) と緩和方針

ベースプリセットに技術文書向けの標準ルールセット `textlint-rule-preset-ja-technical-writing` を採用し、**職務経歴書・ポートフォリオ特有の文脈に合わせて過剰な制約を緩和・無効化** しています。

| ルール名 | 設定 | 設定理由・用途との適合性 |
| :--- | :--- | :--- |
| `no-mix-dearu-desumasu` | `false` (無効) | 職務要約（敬体：〜です/〜ました）と、業務内容・成果の箇条書き（常体・体言止め：〜の構築/〜を担当）の自然な混在を許容するため。 |
| `no-doubled-joshi` | `false` (無効) | 「データ分析基盤のバックエンド開発」など名詞接続が多く、助詞「の」が連続しやすいため。 |
| `max-kanji-continuous-len` | `false` (無効) | 資格名（「基本情報技術者試験」等）や組織名・専門用語での誤検知を防ぐため。 |
| `ja-no-weak-phrase` | `false` (無効) | スキル備考等での見解・ニュアンス表現（「〜と思います」等）を許容するため。 |
| `no-exclamation-question-mark` | `false` (無効) | タイトルやセクション見出し、アイコン付き表現等での記号使用を許容するため。 |
| `ja-no-redundant-expression` | `false` (無効) | 「開発を実施」「〜を行う」等の自然なビジネス表現を許容するため。 |
| `max-comma` | `false` (無効) | 技術スタック（`Lambda, S3, Athena, Glue` 等）のカンマ区切り列挙を許容するため。 |
| `max-ten` | `{"max": 5}` (緩和) | 職務経歴書の成果・工夫などの複文において、自然な読点使用を許容するため（デフォルト3から5に拡大）。 |
| `sentence-length` | `{"max": 180}` (緩和) | 成果や工夫で背景・行動・結果を1文にまとめた際の文字数に対応するため（デフォルト90から180文字に拡大）。 |
| `no-dropping-the-ra` | `true` (有効) | 「見れる」「来れる」などのら抜き言葉を防止し、文章の品位を維持。 |
| `no-doubled-conjunctive-particle-ga` | `true` (有効) | 「〜ですが、〜ですが」といった悪文・冗長表現を防止。 |
| `no-double-negative-ja` | `true` (有効) | 二重否定（「〜ではないとは言えない」等）を防止し、明瞭な表現を維持。 |
| `no-hankaku-kana` | `true` (有効) | 半角カナの混入を防止。 |
| `no-nfd` | `true` (有効) | macOS 等で発生する濁点・半濁点の分離（`が`）を自動検知・修正。 |

---

## 🤖 AI エージェントスキル (Agent Skill)

本リポジトリには、AI コーディングエージェント向けに最適化された **Agent Skill** を同梱しています。

### `proofread-docs` ([`.agents/skills/proofread-docs/SKILL.md`](.agents/skills/proofread-docs/SKILL.md))
`docs/` 配下のマークダウン文書（職務経歴書、履歴書、ポートフォリオ）を高品質に校閲・推敲するためのスキルです。

- **事実・主張の完全保護（絶対制約）**:
  - 著者の実績、スキルレベル、数値、価値観やスタンスなどの事実関係は**一切改変しない**ことを前提とします。
- **メタデータ・HTML タグの保護**:
  - 個人情報マスキングタグ（`<span class="secret-...">`）や Markdown テーブル構造を壊さずに校閲します。
- **textlint と連携した 5 ステップ校閲ワークフロー**:
  1. `npm run lint:fix` による機械的エラーの一括自動修正
  2. 文脈に沿った文章全体の精読（誤字脱字、重複表現、不自然な言い回しの改善）
  3. 修正の適用
  4. `npm run lint` による最終品質チェック（エラー 0 件の検証）
  5. 修正箇所（Before / After）と変更理由の報告

---

## ⚙️ 初期セットアップガイド

### 1. Google Cloud & Google Drive の準備
1. [Google Cloud Console](https://console.cloud.google.com/) で新規プロジェクトを作成（または既存プロジェクトを選択）。
2. **「Google Drive API」** を有効化します。
3. **「IAM と管理」>「サービス アカウント」** でサービスアカウントを作成し、**JSON キー** を発行・ダウンロードします。
4. Google Drive 上に職務経歴書を保存したい **専用フォルダ** を作成します。
5. 作成したフォルダの **「共有」** 設定を開き、手順 3 の **サービスアカウントのメールアドレス（`xxx@xxx.iam.gserviceaccount.com`）を「編集者」として追加** します。
6. フォルダの URL から **フォルダ ID** を取得します（例: `https://drive.google.com/drive/folders/<FOLDER_ID>` の `<FOLDER_ID>` 部分）。

### 2. GitHub Secrets の登録
GitHub リポジトリの **Settings** > **Secrets and variables** > **Actions** にて、以下の Repository secrets を登録します。

#### Google Drive 連携用
- `GDRIVE_SERVICE_ACCOUNT_KEY`: ダウンロードしたサービスアカウント JSON の中身（全文）
- `GDRIVE_FOLDER_ID`: 手順 6 で取得したフォルダ ID

#### 提出用個人情報
- `SECRET_NAME`: 本名（例: `山田 太郎`）
- `SECRET_KANA`: フリガナ（例: `ヤマダ タロウ`）
- `SECRET_ADDRESS`: 正式な住所（例: `東京都千代田区〇〇 1-2-3 マンション名101`）
- `SECRET_EMAIL`: 提出用連絡先メールアドレス
- `SECRET_PHONE`: 提出用電話番号（例: `090-1234-5678`）
- `SECRET_HIGHSCHOOL`: 高校名・学科（例: `〇〇県立△△高等学校 情報処理科`）
- `SECRET_UNIVERSITY`: 大学名・学部学科（例: `〇〇大学 △△学部 □□学科`）
- `SECRET_COMPANY`: 会社名（例: `株式会社〇〇`）

---
