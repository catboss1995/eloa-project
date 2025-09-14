// 文章數據
const articlesData = [
  {
    id: 1,
    slug: "sensitive-skin-care-guide",
    title: "敏感肌必看：日常護理與產品挑選指南",
    description:
      "敏感肌膚容易泛紅、刺痛、乾癢，遇到換季、空氣污染或保養品成分不合時，狀況更明顯。只要掌握正確的護理原則與產品選擇，敏感肌也能穩定健康！",
    category: "膚質類型介紹",
    keywords: ["敏感肌", "護理", "產品挑選", "泛紅", "刺痛", "乾癢"],
    publishDate: "2025/06/10",
    author: {
      name: "皮膚科醫師 王曉明",
      image: "https://cdn.pixabay.com/photo/2013/01/24/12/26/cat-75985_640.jpg" // 頭貼
    }
  },
  {
    id: 2,
    slug: "face-washing-steps",
    title: "每天洗臉的正確步驟與常見錯誤解析",
    description:
      "洗臉是日常保養中最基礎的一步，但你真的洗對了嗎？錯誤的洗臉方式可能會讓肌膚越洗越乾、甚至引發粉刺與敏感。了解正確洗臉的五大步驟，改善NG行為，讓肌膚越洗越健康！",
    category: "保養知識",
    keywords: ["洗臉", "步驟", "錯誤", "粉刺", "敏感", "保養"],
    publishDate: "2024/09/14",
    author: {
      name: "ELOA 美容專家團隊",
      image: "https://cdn.pixabay.com/photo/2015/04/02/06/25/cat-mia-703407_640.jpg" // 頭貼
    }
  },
  {
    id: 3,
    slug: "beauty-device-guide",
    title: "美容儀器怎麼選？不同膚質適合的家用美容儀推薦",
    description:
      "現代人對肌膚保養越來越講究，家用美容儀成為許多人日常保養的好幫手。但市面上美容儀百百款，該如何根據自己的膚質挑選適合的產品？本篇將從膚質分類、美容儀種類、選購重點到正確使用方式，一次解析！",
    category: "美容儀使用知識",
    keywords: ["美容儀", "家用", "膚質", "選購", "使用方式"],
    publishDate: "2025/05/20",
    author: {
      name: "美容科技專家 陳志明",
      image: "https://cdn.pixabay.com/photo/2025/09/03/13/33/cat-9813484_640.jpg" // 頭貼
    }
  },
  {
    id: 4,
    slug: "seasonal-skincare",
    title: "換季保養：秋冬、春夏肌膚護理重點一次看懂",
    description:
      "每到季節交替，肌膚就容易出現乾癢、脫皮、泛紅、油水失衡等問題。不同季節環境變化大，保養方式也要跟著調整，才能讓你的臉一年四季都水嫩有光澤！",
    category: "專家專欄",
    keywords: ["換季", "保養", "秋冬", "春夏", "乾癢", "脫皮", "泛紅", "油水失衡"],
    publishDate: "2025/04/05",
    author: {
      name: "時尚美容編輯 李佳芸",
      image: "https://cdn.pixabay.com/photo/2025/08/09/16/51/wildlife-9764923_640.jpg" // 頭貼
    }
  },
  {
    id: 5,
    slug: "hydration-explained",
    title: "保濕大解析：為什麼您的臉總是乾？",
    description:
      "你是不是常常覺得明明有擦保濕產品，肌膚還是乾燥、脫皮？其實，保濕不只是塗抹乳液這麼簡單！這篇文章將帶你深入了解保濕的三大關鍵、日常容易忽略的陷阱，並教你如何選對產品，讓肌膚水潤透亮。",
    category: "膚質類型介紹",
    keywords: ["保濕", "乾燥", "脫皮", "產品選擇", "保養"],
    publishDate: "2025/03/18",
    author: {
      name: "保養品研發專家 張雅琪",
      image: "https://cdn.pixabay.com/photo/2023/11/02/11/32/woman-8360359_640.jpg" // 頭貼
    }
  },
  {
    id: 6,
    slug: "facial-massage-techniques",
    title: "臉部按摩的好處與正確手法教學",
    description:
      "臉部按摩不僅能促進血液循環、減少浮腫，還能提升保養品吸收效率，是維持肌膚健康與年輕的重要小秘訣！只要掌握正確手法，每天花5-10分鐘，就能讓肌膚煥然一新。",
    category: "教學影片",
    keywords: ["按摩", "臉部", "血液循環", "浮腫", "吸收效率", "手法"],
    publishDate: "2025/02/25",
    author: {
      name: "專業按摩師 吳俊宏",
      image: "https://cdn.pixabay.com/photo/2025/09/05/18/50/cow-9817881_640.jpg" // 頭貼
    }
  }
];

export default articlesData;