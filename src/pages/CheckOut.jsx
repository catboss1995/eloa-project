import React, { useState } from 'react'
import "../scss/styleCheckOut.scss"
import { useCart } from '../data/CartContext'

const CheckOut = () => {
  const { state: cartState, dispatch } = useCart();
  const [formData, setFormData] = useState({
    customerType: 'individual', // individual or business
    name: '',
    phone: '',
    city: '',
    district: '',
    zipCode: '',
    address: '',
    deliveryMethod: 'home',
    notes: ''
  });
  // Discount code state
  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [discountMessage, setDiscountMessage] = useState('');

  // Apply discount code
  const applyDiscountCode = () => {
    if (discountCode.trim().toUpperCase() === 'ELOA2025') {
      setAppliedDiscount(1000);
      setDiscountMessage('折扣碼已套用！');
    } else {
      setAppliedDiscount(0);
      setDiscountMessage('無效的折扣碼');
    }
  };

  // Clear discount
  const clearDiscount = () => {
    setDiscountCode('');
    setAppliedDiscount(0);
    setDiscountMessage('');
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

const zipCodes = {
  '台北市-中正區': '100',
  '台北市-大同區': '103',
  '台北市-中山區': '104',
  '台北市-松山區': '105',
  '台北市-大安區': '106',
  '台北市-萬華區': '108',
  '台北市-信義區': '110',
  '台北市-士林區': '111',
  '台北市-北投區': '112',
  '台北市-內湖區': '114',
  '台北市-南港區': '115',
  '台北市-文山區': '116',
};

const handleInputChange = (field, value) => {
  setFormData(prev => {
    const newData = { ...prev, [field]: value };


    if (field === 'city' || field === 'district') {
      const cityDistrictKey = `${newData.city}-${newData.district}`;
      if (zipCodes[cityDistrictKey]) {
        newData.zipCode = zipCodes[cityDistrictKey];
      }
    }

    if (field === 'city') {
      newData.district = '';
      newData.zipCode = '';
    }

    return newData;
  });
};

const calculateTotal = () => {
  const subtotal = cartState.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discount = appliedDiscount;
  const total = Math.max(0, subtotal - discount);
  return { subtotal, discount, total };
};

const { subtotal, discount, total } = calculateTotal();

const handleSubmit = () => {
  // 處理結帳邏輯
  console.log('Form Data:', formData);
  console.log('Cart Items:', cartState.items);
  console.log('Total:', total);
};

return (
  <div className="checkout-page">
    <div className="checkout-container">
      {/* Left side - Form */}
      <div className="checkout-form">
        <div className="form-header">
          <div className="form-tabs">
            <div
              className={`tab ${formData.customerType === 'individual' ? 'active' : ''}`}
              onClick={() => handleInputChange('customerType', 'individual')}
            >
              訂購人資訊
            </div>
            <div
              className={`tab ${formData.customerType === 'business' ? 'active' : ''}`}
              onClick={() => handleInputChange('customerType', 'business')}
            >
              同會員資訊
            </div>
          </div>
        </div>

        <div className="form-content">
          <div className="form-group">
            <label>收件人姓名</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="請輸入收件人姓名"
            />
          </div>

          <div className="form-group">
            <label>聯絡人手機</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="請輸入手機號碼"
            />
          </div>

          <div className="form-group">
            <label>收件地址</label>
            <div className="address-row">
              <select
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="address-select"
              >
                <option value="">選擇縣市</option>
                {taiwanCities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>

              <select
                value={formData.district}
                onChange={(e) => handleInputChange('district', e.target.value)}
                className="address-select"
                disabled={!formData.city}
              >
                <option value="">選擇區域</option>
                {formData.city && districts[formData.city]?.map(district => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>

              <input
                type="text"
                value={formData.zipCode}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                placeholder="郵遞區號"
                className="zip-input"
              />
            </div>

            <input
              type="text"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              placeholder="請輸入詳細地址"
              className="full-address"
            />
          </div>

          <div className="form-group">
            <label>運送方式</label>
            <div className="delivery-options">
              <label className="radio-option">
                <input
                  type="radio"
                  name="delivery"
                  value="home"
                  checked={formData.deliveryMethod === 'home'}
                  onChange={(e) => handleInputChange('deliveryMethod', e.target.value)}
                />
                <span>宅配到府</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="delivery"
                  value="store"
                  checked={formData.deliveryMethod === 'store'}
                  onChange={(e) => handleInputChange('deliveryMethod', e.target.value)}
                />
                <span>超商取貨</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>備註</label>
            <textarea
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              placeholder="請輸入備註事項"
              rows="10"
            />
          </div>
        </div>
      </div>

      {/* Right side - Cart Summary */}
      <div className="cart-summary">
        <div className="cart-items">
          {cartState.items.length === 0 ? (
            <div className="empty-cart">
              <p>購物車是空的</p>
            </div>
          ) : (
            cartState.items.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <div className="item-price">${item.price.toLocaleString()}</div>

                  <div className="item-qty">
                    數量：
                    <button onClick={() => dispatch({ type: "UPDATE_QTY", payload: { id: item.id, qty: item.qty - 1 } })}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => dispatch({ type: "UPDATE_QTY", payload: { id: item.id, qty: item.qty + 1 } })}>+</button>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

        <div className="order-summary">
          <div className="discount-section">
            <label>折扣碼</label>
            <div className="discount-input-group">
              <input
                type="text"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                placeholder="請輸入折扣碼"
                className="discount-input"
              />
              <button
                type="button"
                onClick={applyDiscountCode}
                className="apply-btn"
                disabled={!discountCode.trim()}
              >
                套用
              </button>
            </div>
            {discountMessage && (
              <div className={`discount-message ${appliedDiscount > 0 ? 'success' : 'error'}`}>
                {discountMessage}
                {appliedDiscount > 0 && (
                  <button
                    type="button"
                    onClick={clearDiscount}
                    className="clear-discount"
                  >
                    ✕
                  </button>
                )}
              </div>
            )}
          </div>
          <div className="summary-row">
            <span>小計</span>
            <span>$ {subtotal.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>折扣</span>
            <span>- $ {discount.toLocaleString()}</span>
          </div>
          <div className="summary-row total">
            <span>付款金額</span>
            <span>$ {total.toLocaleString()}</span>
          </div>
        </div>

        <button
          className="checkout-btn"
          onClick={handleSubmit}
          disabled={cartState.items.length === 0}
        >
          確認結帳
        </button>
      </div>
    </div>
  </div>
);
}

export default CheckOut