import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { google } from 'googleapis';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// アップロード対象ファイル設定
const UPLOAD_FILES = [
  { localPath: 'dist/resume.pdf', driveFileName: '職務経歴書.pdf' },
  { localPath: 'dist/resume-public.pdf', driveFileName: '職務経歴書_公開版.pdf' },
  { localPath: 'dist/cv.pdf', driveFileName: '履歴書.pdf' },
  { localPath: 'dist/cv-public.pdf', driveFileName: '履歴書_公開版.pdf' }
];

// Google Drive API クエリパラメータのエスケープ関数
function escapeDriveQuery(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

async function getGoogleDriveClient() {
  const serviceAccountKeyRaw = process.env.GDRIVE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountKeyRaw) {
    console.warn('⚠️ GDRIVE_SERVICE_ACCOUNT_KEY is not set. Skipping Google Drive upload.');
    return null;
  }

  let credentials;
  try {
    // JSON文字列 または ファイルパスの両方に対応
    if (serviceAccountKeyRaw.trim().startsWith('{')) {
      credentials = JSON.parse(serviceAccountKeyRaw);
    } else {
      const keyContent = fs.readFileSync(path.resolve(rootDir, serviceAccountKeyRaw), 'utf-8');
      credentials = JSON.parse(keyContent);
    }
  } catch {
    // シークレットの生文字列がエラーログに含まれるのを防ぐため、固定メッセージのみ出力
    console.error('❌ Failed to parse GDRIVE_SERVICE_ACCOUNT_KEY (Invalid JSON format or unreadable file).');
    return null;
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/drive.file']
  });

  return google.drive({ version: 'v3', auth });
}

async function uploadOrUpdateFile(drive, folderId, localFilePath, driveFileName) {
  if (!fs.existsSync(localFilePath)) {
    console.warn(`⚠️ File not found: ${localFilePath}. Skipping.`);
    return;
  }

  console.log(`🔍 Checking existing file in Google Drive: "${driveFileName}"...`);

  // 対象フォルダ内に同名ファイルがあるか検索（エスケープ適用）
  const escapedName = escapeDriveQuery(driveFileName);
  const escapedFolderId = escapeDriveQuery(folderId);
  const query = `name = '${escapedName}' and '${escapedFolderId}' in parents and trashed = false`;
  const res = await drive.files.list({
    q: query,
    fields: 'files(id, name, webViewLink)',
    spaces: 'drive',
    supportsAllDrives: true,
    includeItemsFromAllDrives: true
  });

  const existingFile = res.data.files && res.data.files.length > 0 ? res.data.files[0] : null;
  const media = {
    mimeType: 'application/pdf',
    body: fs.createReadStream(localFilePath)
  };

  if (existingFile) {
    console.log(`🔄 Existing file found. Updating content in-place...`);
    await drive.files.update({
      fileId: existingFile.id,
      media,
      fields: 'id, name',
      supportsAllDrives: true
    });
    console.log(`✅ Successfully updated: "${driveFileName}"`);
  } else {
    console.log(`✨ Creating new file in Google Drive folder: "${driveFileName}"...`);
    await drive.files.create({
      requestBody: {
        name: driveFileName,
        parents: [folderId]
      },
      media,
      fields: 'id, name',
      supportsAllDrives: true
    });
    console.log(`✅ Successfully created: "${driveFileName}"`);
  }
}

async function main() {
  const folderId = process.env.GDRIVE_FOLDER_ID;
  if (!folderId) {
    console.warn('⚠️ GDRIVE_FOLDER_ID is not set. Skipping Google Drive upload.');
    return;
  }

  const drive = await getGoogleDriveClient();
  if (!drive) {
    return;
  }

  console.log(`📁 Uploading files to Google Drive...`);

  for (const item of UPLOAD_FILES) {
    const localFilePath = path.join(rootDir, item.localPath);
    await uploadOrUpdateFile(drive, folderId, localFilePath, item.driveFileName);
  }

  console.log('🎉 Google Drive upload completed successfully!');
}

main().catch((err) => {
  console.error('❌ Error during Google Drive upload:', err);
  process.exit(1);
});
