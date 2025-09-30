import { useEffect } from 'react';

export const useDocumentTitle = (title) => {
  useEffect(() => {
    // 保存原始標題以便恢復
    const originalTitle = document.title;
    
    // 設置新標題
    if (title) {
      document.title = `ELOA - ${title}`;
    } else {
      document.title = 'ELOA';
    }

    // 清理函數：當組件卸載時恢復原始標題
    return () => {
      document.title = originalTitle;
    };
  }, [title]);
};

export default useDocumentTitle;