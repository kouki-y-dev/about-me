# 📄 About Me (Portfolio, Resume & CV)

転職活動を見据えた **自己紹介・職務経歴書・履歴書の一元管理リポジトリ** です。

---

## 🌟 特徴・設計思想

1. **正本の一元管理（Single Source of Truth）**:
   - `docs/` 配下の Markdown ファイルをマスターデータとして管理し、二重管理を防ぎます。
2. **GitHub Pages での安全な公開（Web）**:
   - 個人情報（本名・詳細住所・電話番号等）をマスクした状態でポートフォリオ・職務経歴書を Web 公開します。
3. **提出用 PDF の自動生成 & Google Drive 同期（CI/CD）**:
   - GitHub Actions 上で GitHub Secrets から個人情報を安全に注入し、A4 最適化された提出用 PDF を自動生成します。
   - Google Drive の指定フォルダ内に **常に最新バージョンの 1 ファイルとして上書き同期** します（Google Drive の共有リンク URL を変えずに更新可能）。

---

## 📁 ディレクトリ構成

```text
.
├── .github/
│   └── workflows/
│       └── export-pdf.yml        # PDF 生成 & Google Drive 同期ワークフロー
├── docs/                         # 【公開用マークダウン（正本）】
│   ├── index.md                  # ポートフォリオトップ（自己紹介・価値観・目次）
│   ├── resume.md                 # 職務経歴書テンプレート
│   └── cv.md                     # 履歴書・プロフィール詳細
├── scripts/
│   ├── generate-pdf.mjs          # Markdown -> Secrets置換 -> A4 PDF 生成スクリプト
│   ├── upload-drive.mjs          # Google Drive API 最新1ファイル上書きスクリプト
│   └── styles/
│       └── print.css             # A4 印刷・PDF 出力用スタイルシート
├── dist/                         # 生成された PDF / プレビュー用 HTML（.gitignore 対象）
├── package.json
└── README.md
```

---

## 🔒 個人情報置換タグの仕様

Markdown（`docs/resume.md` や `docs/cv.md`）内に以下の HTML タグを記述しておくと、Web 上では自然に表示され、CI/CD で PDF を出力する際に GitHub Secrets の値へ自動置換されます。

| HTML タグ | Web (Pages) での表示例 | 置換される環境変数 / Secrets |
| :--- | :--- | :--- |
| `<span class="secret-name">...</span>` | ニックネーム | `SECRET_NAME`（本名） |
| `<span class="secret-kana">...</span>` | ニックネームのフリガナ | `SECRET_KANA`（本名フリガナ） |
| `<span class="secret-birthdate">...</span>` | 199X年X月X日 | `SECRET_BIRTHDATE`（生年月日） |
| `<span class="secret-address">...</span>` | 都道府県のみ（例: 東京都） | `SECRET_ADDRESS`（番地・建物名を含む現住所） |
| `<span class="secret-email">...</span>` | 公開用メールアドレス | `SECRET_EMAIL`（提出用メールアドレス） |
| `<span class="secret-phone">...</span>` | 非公開 | `SECRET_PHONE`（電話番号） |

※ 環境変数が設定されていない場合（ローカルプレビュー時など）は、タグ内に記述されたデフォルト値がそのまま使用されます。

---

## 💻 ローカルでの実行・プレビュー方法

### 1. 依存関係のインストール
```bash
npm install
```

### 2. PDF 生成（ローカル実行）
```bash
# デフォルト値（公開用情報）のまま PDF を生成
npm run pdf

# 個人情報環境変数を指定して PDF を生成（テスト用）
SECRET_NAME="山田 太郎" SECRET_ADDRESS="東京都千代田区1-1-1" npm run pdf
```

生成された PDF および HTML プレビューは `dist/` ディレクトリに出力されます：
- `dist/resume.pdf`（職務経歴書）
- `dist/cv.pdf`（履歴書）
- `dist/resume.html`（ブラウザでレイアウト確認用）

---

## ⚙️ 初期セットアップガイド (GitHub Actions & Google Drive)

### 1. GitHub Pages の有効化
1. GitHub リポジトリの **Settings** > **Pages** を開きます。
2. **Build and deployment** > **Source** で **「GitHub Actions」** を選択します。
3. `main` ブランチにプッシュすると、`.github/workflows/deploy-pages.yml` が自動実行され、公開されます。

### 2. Google Cloud & Google Drive の準備
1. [Google Cloud Console](https://console.cloud.google.com/) で新規プロジェクトを作成（または既存プロジェクトを選択）。
2. **「Google Drive API」** を有効化します。
3. **「IAM と管理」>「サービス アカウント」** でサービスアカウントを作成し、**JSON キー** を発行・ダウンロードします。
4. Google Drive 上に職務経歴書を保存したい **専用フォルダ** を作成します。
5. 作成したフォルダの **「共有」** 設定を開き、手順 3 の **サービスアカウントのメールアドレス（`xxx@xxx.iam.gserviceaccount.com`）を「編集者」として追加** します。
6. フォルダの URL から **フォルダ ID** を取得します（例: `https://drive.google.com/drive/folders/<FOLDER_ID>` の `<FOLDER_ID>` 部分）。

### 3. GitHub Secrets の登録
GitHub リポジトリの **Settings** > **Secrets and variables** > **Actions** にて、以下の Repository secrets を登録します。

#### Google Drive 連携用
- `GDRIVE_SERVICE_ACCOUNT_KEY`: ダウンロードしたサービスアカウント JSON の中身（全文）
- `GDRIVE_FOLDER_ID`: 手順 6 で取得したフォルダ ID

#### 提出用個人情報
- `SECRET_NAME`: 本名（例: `山田 太郎`）
- `SECRET_KANA`: フリガナ（例: `ヤマダ タロウ`）
- `SECRET_BIRTHDATE`: 生年月日（例: `1995年5月15日`）
- `SECRET_ADDRESS`: 正式な住所（例: `東京都千代田区〇〇 1-2-3 マンション名101`）
- `SECRET_EMAIL`: 提出用連絡先メールアドレス
- `SECRET_PHONE`: 提出用電話番号（例: `090-1234-5678`）

---
