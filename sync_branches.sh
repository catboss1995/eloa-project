#
# 這裡是一個簡單的自動化 Bash 腳本，用於同步所有本地分支與遠端 main 分支的內容
# 可以直接在終端中執行這個腳本，而不需要手動輸入每一條指令
# --如何執行這個腳本？
# 在 VS Code 終端機右上角 +號 右邊下拉選單選擇「Git Bash」
# 如果沒有「Git Bash」選項，請先安裝 Git for Windows(https://git-scm.com/downloads/win)
# 在終端中運行腳本：
# ./sync_branches.sh

#!/bin/bash

# 獲取遠端倉庫的最新內容
git fetch origin

# 獲取當前分支
current_branch=$(git branch --show-current)

# 獲取所有本地分支
branches=$(git branch | cut -c 3-)

# 保存當前分支的未提交更改
git stash

# 遍歷所有本地分支
for branch in $branches; do
  # 跳過 main 分支
  if [ "$branch" != "main" ]; then
    echo "正在同步分支: $branch"
    
    # 切換到分支
    git checkout $branch
    
    # 合併遠端 main 分支的內容
    git merge origin/main -m "Sync with remote main branch"
    
    # 推送到遠端
    git push origin $branch
  fi
done

# 返回到原始分支
git checkout $current_branch

# 恢復未提交的更改
git stash pop

echo "所有分支已同步完成！"