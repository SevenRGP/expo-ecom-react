import { configureStore } from "@reduxjs/toolkit";

// Slices
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice
  }
});

export default store;