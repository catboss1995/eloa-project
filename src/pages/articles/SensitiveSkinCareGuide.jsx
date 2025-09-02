import React from 'react';
import { createStandardArticle } from '../../components/article/ArticleFactory';

/**
 * 敏感肌膚護理指南文章 - 重構
 * 使用文章工廠和統一配置來創建標準化頁面
 * 遵從AI意見減少重複程式碼，提高維護性
 */

// 文章配置
const ARTICLE_CONFIG = {
    slug: "sensitive-skin-care-guide",
    heroImage: 'https://images.pexels.com/photos/3762891/pexels-photo-3762891.jpeg',

    // 文章段落配置
    sections: [
        {
            type: 'image',
            title: "什麼是敏感肌膚？",
            image: "https://images.pexels.com/photos/3762891/pexels-photo-3762891.jpeg",
            imageAlt: "敏感肌膚護理",
            imageOnRight: false,
            roundImage: true,
            children: [
                "敏感肌膚是指皮膚屏障功能較弱，容易受到外界刺激而產生不適反應的膚質類型。這種膚質的人通常對化妝品、環境變化、甚至輕微的摩擦都可能產生過敏反應。",
                "敏感肌膚可能是先天性的，也可能是後天因素如過度使用刺激性產品、環境污染、壓力等導致的。了解自己的肌膚狀況，採取適當的護理措施，可以有效改善敏感症狀。"
            ]
        },
        {
            type: 'divider',
            text: "敏感肌膚的常見特徵"
        },
        {
            type: 'text',
            title: "敏感肌膚的成因",
            questionBox: {
                title: "你知道嗎？",
                content: "研究表明，約有50%的人認為自己有敏感肌膚，但實際上只有約15-20%的人真正符合敏感肌膚的臨床特徵。"
            },
            children: "敏感肌膚的成因複雜多樣，包括遺傳因素、環境刺激、不當的護膚習慣等。了解這些原因有助於我們更好地預防和護理敏感肌膚。"
        },
        {
            type: 'divider',
            text: "敏感肌膚日常護理步驟"
        },
        {
            type: 'image',
            title: "選擇合適的產品",
            image: "https://images.pexels.com/photos/3737605/pexels-photo-3737605.jpeg",
            imageAlt: "敏感肌膚護理產品",
            imageOnRight: false,
            roundImage: true,
            children: [
                "敏感肌膚在選擇護膚品時需要格外謹慎。建議選擇成分簡單、無香料、無色素的產品，並且最好通過敏感肌膚測試。",
                "購買新產品時，建議先購買小包裝試用，在手腕或耳後進行48小時貼膚測試，確認無過敏反應後再大面積使用。",
                "同時，避免同時使用多種新產品，以便在出現不適時能快速找出原因。"
            ]
        },
        {
            type: 'divider',
            text: "敏感肌膚的護理注意事項"
        }
    ],

    // 敏感肌膚特徵提示
    tips: [
        {
            title: '容易發紅',
            description: '接觸熱水、摩擦或某些產品後，皮膚會迅速發紅並持續較長時間。'
        },
        {
            title: '刺痛感',
            description: '使用護膚品時經常感到刺痛或灼熱，特別是含有酒精、香料的產品。'
        },
        {
            title: '乾燥緊繃',
            description: '皮膚容易感到乾燥、緊繃，甚至出現細小的皮屑。'
        },
        {
            title: '對環境敏感',
            description: '溫度變化、空氣污染或紫外線暴露後容易出現不適反應。'
        }
    ],

    // 日常護理步驟
    steps: [
        {
            number: 1,
            title: '溫和清潔',
            description: '選擇無香料、無皂鹼的溫和潔面產品。使用溫水（不超過37°C）輕柔清潔，避免過度搓揉。每日清潔次數不超過2次，早晚各一次即可。',
            image: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            number: 2,
            title: '充分保濕',
            description: '清潔後立即使用保濕產品，趁皮膚還有些濕潤時塗抹，能更好地鎖住水分。選擇含有神經醯胺、透明質酸等成分的產品。',
            image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            number: 3,
            title: '防曬保護',
            description: '無論季節和天氣，每天都需要使用SPF30以上的物理防曬霜（含氧化鋅、二氧化鈦）。選擇專為敏感肌設計的無香料配方。',
            image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            number: 4,
            title: '避免刺激',
            description: '遠離含有酒精、香料、防腐劑過多的產品。新產品使用前先在手腕內側或耳後測試48小時，確認無過敏反應再使用於面部。',
            image: 'https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
    ],

    // 應避免的成分提示 - 作為額外的 tips 部分
    extraTips: [
        {
            title: '酒精',
            description: '特別是變性酒精(SD Alcohol, Alcohol Denat)，會帶走皮膚表面的水分，破壞皮膚屏障。'
        },
        {
            title: '香料',
            description: '人工香料是敏感肌常見的刺激源，即使是標榜「天然香料」的產品也可能引起不適。'
        },
        {
            title: '高濃度果酸',
            description: 'AHA、BHA等酸類成分對敏感肌來說可能過於刺激，特別是高濃度或pH值過低的產品。'
        },
        {
            title: '精油',
            description: '某些精油如薄荷、檸檬、薰衣草等可能引起敏感反應，敏感肌應謹慎使用。'
        }
    ],

    // 推薦成分圖片
    images: [
        {
            src: 'https://images.pexels.com/photos/3762894/pexels-photo-3762894.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: '神經醯胺',
            caption: '神經醯胺：修復屏障',
            square: true
        },
        {
            src: 'https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: '透明質酸',
            caption: '透明質酸：深層保濕',
            rounded: true
        },
        {
            src: 'https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: '菸鹼醯胺',
            caption: '菸鹼醯胺：強化屏障',
            square: true
        }
    ],

    // 結論段落
    conclusion: [
        '敏感肌膚的護理需要耐心和細心。了解自己的肌膚需求，選擇合適的產品，堅持溫和護理原則，是敏感肌護理的關鍵。',
        '記住，簡單有時候是最好的。護膚步驟和產品不必複雜，找到適合自己的基礎產品並堅持使用，比頻繁嘗試新產品更有效。',
        '如果皮膚持續出現嚴重的敏感反應，建議諮詢皮膚科醫生，可能需要專業的診斷和治療方案。'
    ]
};

// 創建標準文章組件
const SensitiveSkinCareGuide = createStandardArticle(ARTICLE_CONFIG);

export default SensitiveSkinCareGuide;
