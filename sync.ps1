# webfacile
# Triple Sync Script

$OneDrivePath = "C:\Users\Utilisateur\OneDrive\Рабочий стол\WEBFACILE"
$LocalPath = "D:\FR\simplon\WordPress\webfaciles"

# 1. Sync to OneDrive
Write-Host "--- Syncing to OneDrive ---" -ForegroundColor Cyan
if (!(Test-Path $OneDrivePath)) {
    New-Item -ItemType Directory -Path $OneDrivePath -Force
}
robocopy $LocalPath $OneDrivePath /MIR /XD .git logs .vscode /R:2 /W:5

# 2. Sync to GitHub
Write-Host "--- Syncing to GitHub ---" -ForegroundColor Green
git add .
$CommitMsg = "Sync: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git commit -m $CommitMsg
git push origin main

Write-Host "--- Triple Sync Complete ---" -ForegroundColor Yellow
