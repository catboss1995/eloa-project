// context/CartContext.jsx
import { createContext, useContext, useEffect, useReducer } from "react";
const CartContext = createContext();


const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.items.find(i => i.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          isOpen: true,
          items: state.items.map(i =>
            i.id === action.payload.id ? { ...i, qty: i.qty + action.payload.qty } : i
          ),
        };
      }
      return { ...state, isOpen: true, items: [...state.items, action.payload] };

    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter(i => i.id !== action.payload) };

    case "UPDATE_QTY":
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i
        ).filter(i => i.qty > 0),
      };

    case "CLEAR_CART":
      // return { ...state, items: [] };
      const clearedState = { ...state, items: [], isOpen: false };
      localStorage.setItem("cart", JSON.stringify(clearedState));
      return clearedState;

    case "DIRECT_BUY":
      const existDirect = state.items.find(i => i.id === action.payload.id);
      if (existDirect) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id
              ? { ...i, qty: i.qty + action.payload.qty }
              : i
          ),
        };
      }
      return { ...state, items: [...state.items, action.payload] };

    case "TOGGLE_CART":
      return { ...state, isOpen: !state.isOpen };

    case "OPEN_CART":
      return { ...state, isOpen: true };

    case "CLOSE_CART":
      return { ...state, isOpen: false };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const localData = localStorage.getItem("cart");
  const initialState = localData
    ? JSON.parse(localData)
    : { items: [], isOpen: false };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  // ✅ 監聽 state.items 改變時，存回 localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
