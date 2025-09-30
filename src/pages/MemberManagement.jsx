import React, { useEffect, useState } from 'react'
import "../scss/styleMemberManagement.scss"
import MemberSystem from '../data/MemberSystem'
import { useNavigate } from 'react-router-dom'
import useDocumentTitle from "../hooks/useDocumentTitle"
// 引入圖片
import decorateTop from "../assets/images/member-management-bg-top.svg"
import decorateBottom from "../assets/images/member-management-bg-bottom.svg"
import memberAvatar from "../assets/images/member-avatar.png"
import orderListIcon from "../assets/images/orderListIcon.svg"
import memberInfoIcon from "../assets/images/subtractIcon.svg"
import logoutIcon from "../assets/images/logoutIcon.svg"

const MemberManagement = () => {
    const navigate = useNavigate();
    const [userOrders, setUserOrders] = useState([]);
    const [activeTab, setActiveTab] = useState("order-list");
    const [editData, setEditData] = useState({
        username: "",
        email: "",
        phone: "",
        city: "",
        district: "",
        address: "",
        birthday: ""
    });
    const [isEditing, setIsEditing] = useState(false);
    // TODO: Implement date formatting  
    // const formatDate = (dateString) => {
    //     const date = new Date(dateString);
    //     return date.toLocaleDateString('zh-TW');
    // };

    // 格式化金額
    const formatPrice = (price) => {
        return `$ ${price.toLocaleString()}`;
    };
    const handleSignout = () => {
        MemberSystem.logout();
        navigate("/home");
    };
    const currentUser = MemberSystem.getCurrentUser();
    // 初始化編輯資料
    useEffect(() => {
        if (currentUser) {
            setEditData({
                username: currentUser.username || "",
                email: currentUser.email || "",
                phone: currentUser.phone || "",
                city: currentUser.city || "",
                district: currentUser.district || "",
                address: currentUser.address || "",
                birthday: currentUser.birthday || ""
            });
            // 載入用戶訂單資料
            const orders = MemberSystem.getUserOrders(currentUser.id);
            setUserOrders(orders);

        }
    }, []);
    // 輸入變更按鈕
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    // 儲存會員資料
    const handleSaveMemberInfo = () => {
        try {
            //核對當前會員資料
            const users = MemberSystem.getUsers();
            const userIndex = users.findIndex(user => user.id === currentUser.id);

            if (userIndex !== -1) {
                users[userIndex] = { ...users[userIndex], ...editData };
                MemberSystem.saveUsers(users);
                // 更新會員資料
                localStorage.setItem('currentUser', JSON.stringify(users[userIndex]));
                setIsEditing(false);
                alert("會員資料更新成功");
            }
        } catch (error) {
            alert("更新失敗：" + error.message);
        }
    }
    const handleCancelEdit = () => {
        setEditData({
            username: currentUser.username || "",
            email: currentUser.email || "",
            phone: currentUser.phone || "",
            address: currentUser.address || "",
            birthday: currentUser.birthday || ""
        });
        setIsEditing(false);
    };
    // Taiwan cities data
    const taiwanCities = [
        '台北市', '新北市', '桃園市', '台中市', '台南市', '高雄市',
        '基隆市', '新竹市', '嘉義市', '新竹縣', '苗栗縣', '彰化縣',
        '南投縣', '雲林縣', '嘉義縣', '屏東縣', '宜蘭縣', '花蓮縣',
        '台東縣', '澎湖縣', '金門縣', '連江縣'
    ];

    const districts = {
        '台北市': ['中正區', '大同區', '中山區', '松山區', '大安區', '萬華區', '信義區', '士林區', '北投區', '內湖區', '南港區', '文山區'],
        '新北市': ['板橋區', '三重區', '中和區', '永和區', '新莊區', '新店區', '樹林區', '鶯歌區', '三峽區', '淡水區'],
    };
    const renderContent = () => {
        switch (activeTab) {
            case "order-list":
                return (
                    <div className="order-list-content">
                        <div className="order-header">
                            <div className="order-header-item">訂單編號</div>
                            <div className="order-header-item">產品名稱</div>
                            <div className="order-header-item">訂單金額</div>
                            <div className="order-header-item">付款方式</div>
                            <div className="order-header-item">配送方式</div>
                            <div className="order-header-item">配送狀態</div>
                        </div>
                        
                        {userOrders.length === 0 ? (
                            <div className="no-orders">
                                <p>目前沒有訂單記錄</p>
                            </div>
                        ) : (
                            userOrders.map((order) => (
                                <div key={order.id} className="order-row">
                                    <div className="order-item">{order.id}</div>
                                    <div className="order-item product-info">
                                        {order.items && order.items.length > 0 ? (
                                            <div className="product-list">
                                                {order.items.map((item, index) => (
                                                    <div key={index} className="product-item">
                                                        {item.img && (
                                                            <img 
                                                                src={item.img} 
                                                                alt={item.name}
                                                                className="order-image"
                                                            />
                                                        )}
                                                        <span className="order-product-name">
                                                            {item.name} x{item.qty}
                                                        </span>
                                                        
                                                        
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <span>無商品資料</span>
                                        )}
                                    </div>
                                    <div className="order-item">{formatPrice(order.totalAmount)}</div>
                                    <div className="order-item">
                                        <span className="payment-method">{order.paymentMethod}</span>
                                    </div>
                                    <div className="order-item">
                                        <span className="delivery-method">{order.deliveryMethod}</span>
                                    </div>
                                    <div className="order-item">
                                        <span className="delivery-status">{order.status}</span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )
            case "edit-member-info":
                return (
                    <div className="edit-member-info-content">

                        <form className='member-form'>
                            <div className="form-group">
                                <label>使用者名稱</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={editData.username}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                            <div className="form-group">
                                <label>電子郵件</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={editData.email}
                                    onChange={handleInputChange}
                                    disabled={true} 
                                />
                            </div>
                            <div className="form-group">
                                <label>手機號碼</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={editData.phone}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                            <div className="form-group">
                                <label>地址</label>
                                <div className="address-row">
                                    <select
                                        value={editData.city}
                                        name="city"
                                        onChange={handleInputChange}
                                        className="address-select"
                                        disabled={!isEditing}
                                    >
                                        <option value="">選擇縣市</option>
                                        {taiwanCities.map(city => (
                                            <option key={city} value={city}>{city}</option>
                                        ))}
                                    </select>

                                    <select
                                        value={editData.district}
                                        name="district"
                                        onChange={handleInputChange}
                                        className="address-select"
                                        disabled={!isEditing}
                                    >
                                        <option value="">選擇區域</option>
                                        {editData.city && districts[editData.city]?.map(district => (
                                            <option key={district} value={district}>{district}</option>
                                        ))}
                                    </select>
                                    <input
                                        type="text"
                                        name="address"
                                        value={editData.address}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>生日</label>
                                <input
                                    type="date"
                                    name="birthday"
                                    value={editData.birthday}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                            <div className="form-actions">
                                {!isEditing ? (
                                    <button
                                        type="button"
                                        className="edit-btn"
                                        onClick={() => setIsEditing(true)}
                                    >
                                        編輯資料
                                    </button>
                                ) : (
                                    <div className="edit-actions">
                                        <button
                                            type="button"
                                            className="save-btn"
                                            onClick={handleSaveMemberInfo}
                                        >
                                            儲存
                                        </button>
                                        <button
                                            type="button"
                                            className="cancel-btn"
                                            onClick={handleCancelEdit}
                                        >
                                            取消
                                        </button>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                )
        }
    }
    return (
        useDocumentTitle(`尊榮的${currentUser.username}資訊`),
        <section className="member-management-sec">
            <img src={decorateTop} alt="decorateTop" className='member-management-decorate' id='top' />
            <img src={decorateBottom} alt="" className="member-management-decorate" id='bottom' />
            <div className="member-content-sec">
                <div className="member-option-area">

                    <div className="member-option" id='member-info-card'>
                        <img src={memberAvatar} alt="memberAvatar" />
                        <p>Hi!<br />尊榮的 {currentUser.username}</p>
                    </div>
                    <div className={`member-option ${activeTab === "order-list" ? "active" : ""}`} id='order-list' onClick={() => setActiveTab("order-list")}>
                        <img src={orderListIcon} alt="orderList" />
                        <p>我的訂單</p>
                    </div>
                    <div className={`member-option ${activeTab === "edit-member-info" ? "active" : ""}`} id='edit-member-info' onClick={() => setActiveTab("edit-member-info")}>
                        <img src={memberInfoIcon} alt="editMemberInfo" />
                        <p>會員資料</p>
                    </div>
                    <div className="member-option" id="sign-out" onClick={handleSignout}>
                        <img src={logoutIcon} alt="logout" />
                        <p>登出</p>
                    </div>
                </div>
                <div className="member-option-content">
                    {renderContent()}
                </div>
            </div>

        </section>
    )
}

export default MemberManagement