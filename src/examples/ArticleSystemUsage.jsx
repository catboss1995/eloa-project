/**
 * 文章系統使用示例
 * 展示如何使用重構後的組件和工具來創建文章
 */

import React from 'react';
import {
    createStandardArticle,
    createSimpleArticle,
    createTutorialArticle,
    createArticleFromTemplate
} from '../components/article/ArticleFactory';

// =============================================================================
// 示例 1: 使用標準文章工廠創建複雜文章
// =============================================================================

const ComplexArticleExample = createStandardArticle({
    slug: "complex-article-example",
    heroImage: 'https://example.com/hero.jpg',

    sections: [
        {
            type: 'text',
            title: '文章簡介',
            children: '這是一篇示例文章，展示如何使用新的文章系統。'
        },
        {
            type: 'divider',
            text: '主要內容'
        },
        {
            type: 'image',
            title: '圖文並茂的段落',
            image: 'https://example.com/section.jpg',
            imageOnRight: true,
            children: '這個段落包含了圖片和文字說明。'
        }
    ],

    steps: [
        {
            number: 1,
            title: '第一步',
            description: '詳細的步驟說明...',
            image: 'https://example.com/step1.jpg'
        }
    ],

    tips: [
        {
            title: '重要提示',
            description: '這是一個重要的提示內容。'
        }
    ],

    conclusion: [
        '總結第一段...',
        '總結第二段...'
    ]
});

// =============================================================================
// 示例 2: 使用簡單文章工廠創建純文字文章
// =============================================================================

const SimpleArticleExample = createSimpleArticle(
    "simple-article-example",
    [
        {
            title: '前言',
            content: '這是一篇簡單的文章，只包含文字內容。'
        },
        {
            title: '主要內容',
            content: '這裡是文章的主要內容...',
            questionBox: {
                title: '你知道嗎？',
                content: '這是一個有趣的小知識。'
            }
        }
    ],
    'https://example.com/simple-hero.jpg'
);

// =============================================================================
// 示例 3: 使用教學文章工廠創建教學內容
// =============================================================================

const TutorialArticleExample = createTutorialArticle(
    "tutorial-article-example",
    [
        {
            number: 1,
            title: '準備工作',
            description: '在開始之前，請準備以下工具...',
            image: 'https://example.com/prep.jpg'
        },
        {
            number: 2,
            title: '執行步驟',
            description: '按照以下步驟進行操作...',
            image: 'https://example.com/execute.jpg'
        }
    ],
    [
        {
            title: '注意事項',
            description: '操作過程中請注意安全。'
        }
    ],
    'https://example.com/tutorial-hero.jpg'
);

// =============================================================================
// 示例 4: 使用模板創建文章
// =============================================================================

const TemplateArticleExample = createArticleFromTemplate(
    "template-article-example",
    "TUTORIAL",
    {
        heroImage: 'https://example.com/template-hero.jpg',
        steps: [
            {
                number: 1,
                title: '模板步驟',
                description: '使用模板創建的步驟...',
                image: 'https://example.com/template-step.jpg'
            }
        ]
    }
);

// =============================================================================
// 示例 5: 手動組合組件的方式 (舊方式比較)
// =============================================================================

import ArticleBase from '../components/article/ArticleBase';
import ArticleIntro from '../components/article/ArticleIntro';
import ArticleStepFlow from '../components/article/ArticleStepFlow';
import { useArticleData, useArticleSEO } from '../hooks/useArticle';

const ManualArticleExample = () => {
    const { articleData, relatedArticles } = useArticleData("manual-example");
    useArticleSEO(articleData);

    if (!articleData) return <div>載入中...</div>;

    return (
        <ArticleBase
            title={articleData.title}
            category={articleData.category}
            publishDate={articleData.publishDate}
            author={articleData.author}
            relatedArticles={relatedArticles}
        >
            <ArticleIntro>
                {articleData.description}
            </ArticleIntro>

            <ArticleStepFlow
                steps={[
                    {
                        number: 1,
                        title: '手動步驟',
                        description: '這是手動創建的步驟...',
                        image: 'https://example.com/manual.jpg'
                    }
                ]}
            />
        </ArticleBase>
    );
};

// =============================================================================
// 使用指南
// =============================================================================

/*
推薦的使用方式：

1. 對於簡單的純文字文章，使用 createSimpleArticle
2. 對於包含步驟的教學文章，使用 createTutorialArticle  
3. 對於複雜的多媒體文章，使用 createStandardArticle
4. 對於標準化的文章類型，使用 createArticleFromTemplate

優點：
- 減少重複程式碼
- 統一的樣式和行為
- 更好的錯誤處理
- 自動化的 SEO 設定
- 一致的載入狀態和圖片處理

注意事項：
- 所有 class 和 id 名稱保持不變，確保樣式相容性
- 使用統一的配置文件管理常數
- 遵循統一的命名規範
- 充分利用 TypeScript 的類型檢查 (如果使用)
*/

export {
    ComplexArticleExample,
    SimpleArticleExample,
    TutorialArticleExample,
    TemplateArticleExample,
    ManualArticleExample
};
