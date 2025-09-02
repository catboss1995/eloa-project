import React from 'react'
import "../scss/styleShopCart.scss"
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../data/CartContext'
import shopCartIcon from "../assets/images/shopCart.svg"
import closeIcon from "../assets/images/close.svg"
import GlassmorphismButton from './GlassmorphismButton'

const ShopCart = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const totalPrice = state.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shopNote = "溫馨提示：\n取件需核對證件資訊與收件人資訊是否一致的，麻煩使用真實資訊；\n地址需要市/縣+區/鄉/鎮+路名+門牌 號；\n英文地址物流無法配送";
  return (
    <div className={`cart-drawer ${state.isOpen ? "open" : ""}`} >
      <div className="cart-header">
        <div className="shop-cart-icon" onClick={() => dispatch({ type: "CLOSE_CART" })}>
          <img src={shopCartIcon} alt="shopCartIcon" />
        </div>
        <h3>購物車</h3>
        <div onClick={() => dispatch({ type: "CLOSE_CART" })}>
          <img src={closeIcon} alt="close" />
        </div>
      </div>
      <div className="cart-body">
        {state.items.length === 0 ? (
          <div className='empty-status'>
            <p>怎麼可能會是空的？</p>
            <div className='go-shopping-button' onClick={()=>{dispatch({type:"CLOSE_CART"}); navigate("./ProductMasterIX")}}>
              <GlassmorphismButton text={"來去逛逛"} />
            </div>
          </div>
        ) : (
          <>
            <div className="full-status">
              {state.items.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.img} alt={item.name} />
                  <div className='cart-item-info'>
                    <p>{item.name}</p>
                    <p>單價：{item.price.toLocaleString()}</p>
                    <div className='qty-control-button'>
                      數量：
                      <button onClick={()=>dispatch({type: "UPDATE_QTY", payload:{id:item.id, qty: item.qty-1}})}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={()=>dispatch({type: "UPDATE_QTY", payload:{id:item.id, qty: item.qty+1}})}>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-total">
              小計：$ {totalPrice.toLocaleString()}
            </div>

          </>
        )}
      </div>
      {state.items.length > 0 && (
      <div className="cart-footer">
        <div className="note-area">
          <p>{shopNote}</p>
        </div>
        <div className="check-out-button" onClick={() => {dispatch({ type: "CLOSE_CART" });navigate("/CheckOut");}}>
          <GlassmorphismButton text={"結帳去"}/>
        </div>
      </div>
      )}
    </div>
  )
}

export default ShopCart