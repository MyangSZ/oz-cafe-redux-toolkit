import data from "../assets/data";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// redux-toolkit로 변경하기

// menu
export const menuSlice = createSlice({
  name: "menu",
  initialState: data.menu,
  reducers: {}, // 상태변경이 없으므로 공백
});

// cart. 액션 타입과 액션 크리에이터 만들어지도록 리듀서 전달
export const cartSlice = createSlice({
  name: "cart",
  initialState: [], // 초기값 빈배열
  reducers: {
    addToCart(state, action) {
      return [...state, action.payload];
    },
    removeFromCart(state, action) {
      return state.filter((el) => el.id !== action.payload.id);
    },
  },
});

// 스토어 만들기
export const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    cart: cartSlice.reducer,
  },
});
