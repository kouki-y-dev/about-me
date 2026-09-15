---
title: "スキル詳細・習熟度"
---

# スキル詳細・習熟度

職務経歴書に記載している各スキルの詳細な練度、得意領域、および経験が浅い・未経験の領域のまとめです。  
※ 各スキルの経験年数や時系列の実務経歴については [職務経歴書](./resume.md) をご参照ください。

---

## コアスキル

### Python
- **主な用途**: データパイプライン構築、バッチ処理、Web API開発、AI連携
- **できること・強み**:
  - 型アノテーションを徹底したコーディング
  - pytest, Ruff, ty, mypy を利用したコードの品質保証
  - 自社用の共通モジュールの構築・公開経験（CodeArtifact）
- **経験が浅いこと・対応範囲外**:
  - PyTorch, TensorFlow 等を用いたディープラーニング・機械学習モデル自体の研究開発・数理アルゴリズム設計
  - Tkinter, PyQt 等を用いたデスクトップGUIアプリケーションの開発
  - CythonやC言語を用いたPython拡張モジュールの開発
- **補足**:
  - プロジェクトひな形としてテンプレートリポジトリ（[python-project-template](https://github.com/kouki-y-dev/python-project-template)）を公開中

### AWS（データ基盤・分析）
- **対象サービス**: S3, Glue, Athena, QuickSight, OpenSearch など
- **主な用途**: データ分析基盤構築、ログ収集・集計パイプライン、BIダッシュボード構築
- **できること・強み**:
  - S3へのデータ蓄積からGlue Crawler & Athenaによる分析環境構築、QuickSightによるダッシュボード構築までを単独で遂行可能
  - Athenaのクエリコスト削減・パフォーマンス向上を見据えたS3のパーティショニング設計
  - OpenSearchへのデータ投入パイプラインの構築や、ログ調査・検索での活用
  - ビジネス部門の意思決定や分析ニーズから逆算したデータスキーマの設計
- **経験が浅いこと・対応範囲外**:
  - OpenSearch のシャード設計やインデックスライフサイクル（ISM/Data Streams）等のインフラ低レイヤ設計（既存環境へのデータ連携・利用がメイン）
  - Amazon Redshift や Snowflake 等のDWHの利用経験
  - PySpark等を用いたテラバイト規模の大規模分散処理・クラスタチューニング

### AWS（サーバーレス・バックエンド）
- **対象サービス**: Lambda, Step Functions, API Gateway, DynamoDB など
- **主な用途**: API開発、定期実行バッチ処理
- **できること・強み**:
  - Lambda + API Gateway + DynamoDB を用いたサーバーレスバックエンドの設計・構築（テーブル設計・GSI選定からAPI設計まで単独遂行可能）
  - API Gateway + SNS / SQS + Lambda によるイベント駆動型・非同期処理パイプラインの設計
  - AWS Lambda Web Adapter を活用した FastAPI によるサーバーレス Web API の構築
- **経験が浅いこと・対応範囲外**:
  - VPC、サブネット、NAT Gateway、Transit Gateway 等のネットワークインフラ自体のゼロからの設計・構築
  - ECS や EKSを用いた大規模常駐型Webアプリケーションの運用
  - REST API の開発が中心であり、GraphQL、gRPC、WebSocket を用いたAPIやリアルタイム通信の開発は実務未経験
  - DynamoDB のSingle Table Design経験やマルチリージョン跨ぎのグローバルテーブル運用

### IaC / CI/CD（Terraform / GitHub Actions）
- **対象ツール**: Terraform, GitHub Actions, GitLab Runners, CloudFormation (SAM)
- **主な用途**: AWSインフラのコード管理、テスト・ビルド・デプロイの自動化
- **できること・強み**:
  - TerraformによるIaC化から、GitHub Actionsを用いたCI/CDパイプライン構築までを単独で遂行可能
  - pytest, Ruff, ty, mypy および terraform apply による自動テスト・リント環境の構築
  - これまで利用経験のあるサービス（API Gateway, Lambda, DynamoDB, SQS/SNS等）のIaC化
- **経験が浅いこと・対応範囲外**:
  - 他者への共有を前提とする Terraform module の設計・構築経験
  - AWS 以外のクラウドベンダーに対する Terraform 利用経験
  - CloudFormation系のツールにおいては AWS SAM での開発経験が中心であり、素のCloudFormationテンプレートやAWS CDKによる構築は実務未経験（直近の実務IaCはTerraformがメイン）
  - Terraform Cloud / Atlantis 等の専用ツールの運用
  - 大規模マルチアカウント環境（AWS Organizations, Control Tower等）での統制レベルのIaC設計

### ソフトウェア設計・アーキテクチャ
- **主な適用思想**: 関心の分離、クリーンアーキテクチャ
- **できること・強み**:
  - 規模感やシステムの寿命に応じて、過剰設計を避け「シンプルな関心の分離」と「クリーンアーキテクチャ」を適切に使い分ける判断
  - 依存性逆転を用いたインフラ層の抽象化と、ビジネスロジックの高い単体テスト容易性の確保
  - 不正な状態を許容しない型安全なドメインモデルの設計
- **経験が浅いこと・対応範囲外**:
  - 基本的な4層（Domain, UseCase, Presentation, Infrastructure）による設計・実装が中心であり、他の派生アーキテクチャの実戦投入経験はなし
  - 多数のサービスが連携するマイクロサービスアーキテクチャのサービス分割設計
- **補足**:
  - 自身のクリーンアーキテクチャに対する考え方について[Zennのテックブログ](https://zenn.dev/yymm/articles/20260905-refactoring-to-clean-architecture)にまとめています

### 生成AI / AIエージェント
- **対象技術・ツール**: Bedrock AgentCore, Gemini API, Browser Use, Dify
- **主な用途**: AIエージェント基盤の構築、業務自動化ワークフロー、画像・ドキュメント解析とデータ抽出
- **できること・強み**:
  - Bedrock AgentCore を活用したAIエージェントシステムのプロトタイプ検証・初期開発
  - Pydantic による Structured Outputsを用いた、ハルシネーションを抑制した型安全なデータ抽出
  - Dify を用いた社内業務効率化ワークフローの構築
- **経験が浅いこと・対応範囲外**:
  - LLMモデル自体の事前学習・ファインチューニングや数理モデル設計
  - LangChain, LlamaIndex 等の特定フレームワークの運用経験
  - AI エージェントシステムの本番環境での運用保守経験（プロトタイプ・初期開発フェーズが中心）
- **補足**:
  - 実務でのAIエージェント開発時に調査・設計した評価手法について[Zennのテックブログ](https://zenn.dev/yymm/articles/20260915-agent-ops)にまとめています

---

## 周辺技術・ツール

### 開発基盤・コンテナ・OS・CI/CD

| 技術・ツール | できること・活用実績 | 経験が浅い・対応範囲外 |
| :--- | :--- | :--- |
| **Docker** | ・ローカル開発環境の構築<br>・AWS Lambda用コンテナイメージのビルド<br>・ECS (Fargate) バッチ処理構築での利用経験| ・ECS・EKSを用いた常駐型のWebサービス・Web APIの本格的な運用経験 |
| **Linux** | ・日常的な開発環境（WSL、EC2上のUbuntu）での利用| ・Linux自体のOSカーネルチューニングや、WebサーバーとしてのOSレイヤ保守運用 |
| **Git** | ・日常的なバージョン管理、ブランチ作成、Pull Request運用、コンフリクト解消 | ・10名以上の大人数チームでの厳格なブランチ運用や大規模コンフリクト解消の経験はなし（1〜3名の小規模開発がメイン）|
| **GitLab Runners** | ・過去プロジェクトにおけるCI/CDパイプライン構築・保守経験 | ・直近はGitHub Actionsをメインに利用しているため、近年の最新機能のキャッチアップは範囲外 |

### 言語・フレームワーク

| 技術・ツール | できること・活用実績 | 経験が浅い・対応範囲外 |
| :--- | :--- | :--- |
| **SQL** | ・基本的なCRUD<br>・主に分析用途としてのSELECT文記述 | ・スロークエリのチューニング等、クエリの最適化・運用に関する作業 |
| **FastAPI** | ・Lambda + API Gateway 上での構築（Lambda Web Adapterの利用前提） | ・ECS等を用いたAPIサーバー上での構築経験 |
| **Pydantic** | ・Lambda + Python 構築時における各種データの型の保証<br>・LLM応答出力時におけるStructured Outputsの利用<br>・クリーンアーキテクチャ適用時におけるドメインモデル構築<br>・AWS CodeArtifactを用いた共通スキーマパッケージの構築・社内配布（validator, computed_field, Annotated を活用） | ・`create_model` を用いた動的なモデル生成（基本はスキーマが確定している設計・運用が中心） |
| **JavaScript / TypeScript** | ・AWS Lambda（Node.js / TypeScript）を用いたサーバーレスAPIの構築<br>・Google Apps Script としての利用<br>・軽微なフロントエンドの改修 | ・React、Vue.js 等のモダンフレームワーク（バックエンド・インフラが中心であり、フロントエンドは専門外） |
| **PHP** | ・新卒入社時の社内システム改修で利用（CodeIgniter） | ・Laravel 等のモダンフレームワークを用いた開発経験 |
| **Django** | ・個人開発での実装・学習経験 | ・実務経験なし |
| **Java** | ・学生時代の学習経験 | ・実務経験なし |
| **C言語** | ・学生時代の学習経験 | ・実務経験なし |

### 開発ツール・AI環境

| 技術・ツール | できること・活用実績 | 経験が浅い・対応範囲外 |
| :--- | :--- | :--- |
| **Cursor** | ・日常業務におけるメインエディタとして利用<br>・Chatを活用した実装・リファクタリング・テストコード作成の効率化<br>・Vibe Coding、仕様駆動開発での利用 | ・MCP連携等の高度な外部拡張連携や、組織一括管理設定 |
| **VS Code** | ・Cursor導入以前のメインツール<br>・WSLやRemote-SSH等を用いたリモート/コンテナ開発環境での利用 | ・VS Code独自の拡張機能の自作 |
| **Antigravity** | ・個人開発・作業時における活用 | ・実務での活用経験なし |
