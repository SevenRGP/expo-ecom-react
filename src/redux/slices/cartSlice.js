import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  total: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.total = state.cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.total = state.cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
    },
    incrementQuantity: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      state.total = state.cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
    },
    decrementQuantity: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      state.total = state.cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
    },
    calculateTotal: (state) => {
      state.total = state.cartItems.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
      }, 0);
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  calculateTotal
} = cartSlice.actions;
export default cartSlice.reducer;