import React from "react";
import newsBanner from "../assets/images/News-Banner2.png";

import "../scss/styleNews.scss";

const News = () => {
  return (
    <div className="news">
      {/* BANNER */}
      <div className="news__banner">
        <img
          className="news__banner-img"
          src={newsBanner}
          alt="最新消息 Banner"
        />
        <div className="news__banner-inner">
          {/* Banner 文字區（可留空） */}
        </div>
      </div>

      {/* Banner 下方標題 */}
      <div className="news__section">
        <h2 className="news__heading">最新消息</h2>
      </div>
    </div>
  );
};

export default News;
