#
# 這裡是一個簡單的自動化 Bash 腳本，用於同步所有本地分支與遠端 main 分支的內容
# 進階改良：錯誤處理、排除分支（main、gh-pages、release）、同步遠端分支、自動恢復、執行前確認、日誌輸出、參數指定
# 可以直接在終端中執行這個腳本，而不需要手動輸入每一條指令
# --如何執行這個腳本？
# 在 VS Code 終端機右上角 +號 右邊下拉選單選擇「Git Bash」
# 如果沒有「Git Bash」選項，請先安裝 Git for Windows(https://git-scm.com/downloads/win)
# 在終端中運行腳本：
# ./sync_branches.sh

#!/bin/bash

EXCLUDE_BRANCHES=("main" "gh-pages" "release")
LOG_FILE="sync_branches.log"
SRC_BRANCH="main"

echo "=== 分支同步腳本 ==="
echo "來源分支：$SRC_BRANCH"
echo "排除分支：${EXCLUDE_BRANCHES[*]}"
echo "日誌檔案：$LOG_FILE"
echo "-------------------"
read -p "確定要同步所有分支嗎？(y/n): " confirm
if [[ "$confirm" != "y" ]]; then
  echo "已取消操作。"
  exit 1
fi

# 開始記錄日誌
echo "[$(date)] 開始同步分支" > $LOG_FILE

# 獲取遠端倉庫的最新內容
git fetch --all >> $LOG_FILE 2>&1

# 先切換到 main 分支並拉取最新內容
git checkout $SRC_BRANCH >> $LOG_FILE 2>&1
git pull origin $SRC_BRANCH >> $LOG_FILE 2>&1

# 保存當前分支與未提交更改
current_branch=$(git branch --show-current)
git stash >> $LOG_FILE 2>&1

# 取得所有遠端分支（本地不存在的也會列出）
branches=$(git branch -r | grep -v '\->' | grep "origin/" | sed 's/origin\///' | sort | uniq)

for branch in $branches; do
  skip=false
  for ex in "${EXCLUDE_BRANCHES[@]}"; do
    if [[ "$branch" == "$ex" ]]; then
      skip=true
      break
    fi
  done
  if $skip; then
    echo "略過分支: $branch" | tee -a $LOG_FILE
    continue
  fi

  echo "正在同步分支: $branch" | tee -a $LOG_FILE

  # 建立本地分支（如果不存在）
  if ! git show-ref --verify --quiet refs/heads/$branch; then
    git checkout -b $branch origin/$branch >> $LOG_FILE 2>&1
  else
    git checkout $branch >> $LOG_FILE 2>&1
  fi

  # 合併 main 分支內容
  if git merge $SRC_BRANCH -m "Sync with $SRC_BRANCH" >> $LOG_FILE 2>&1; then
    git push origin $branch >> $LOG_FILE 2>&1
    echo "分支 $branch 同步成功。" | tee -a $LOG_FILE
  else
    echo "分支 $branch 合併失敗，請手動處理衝突！" | tee -a $LOG_FILE
    git merge --abort
    continue
  fi
done

# 返回原始分支
git checkout $current_branch >> $LOG_FILE 2>&1

# 恢復未提交的更改
git stash pop >> $LOG_FILE 2>&1

echo "[$(date)] 所有分支已同步完成！" | tee -a $LOG_FILE