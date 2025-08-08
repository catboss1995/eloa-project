import "../css/styleTopbar.css"
import topbarLogo from "../images/topbarLogo.png"
import topbarMember from "../images/topbarMember.png"
import topbarBag from "../images/topbarBag.png"



const Topbar = () => {
  return (
    <nav>
        <img src={topbarLogo} alt="logo" id="topbar-logo"/>
        <div className="nav-right">
            <a href="#">產品資訊</a>
            <a href="#">我的膚況區</a>
            <a href="#">肌膚學苑</a>
            <a href="#">常見問題</a>
            <a href="#">最新消息</a>
            <img src={topbarMember} alt="memberIcon" id="topbar-member"/>
            <img src={topbarBag} alt="bagIcon" id="topbar-bag"/>
        </div>
    </nav>
  )
}

export default Topbar