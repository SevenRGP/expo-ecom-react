import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  loading: true,
  error: null,
  isFiltered: false,
};

// getAllProducts
const getAllProducts = createAsyncThunk('products/getAllProducts', async () => {
  const response = await axios.get('https://fakestoreapi.in/api/products');
  return response.data.products;
});

// getSingleProduct
const getSingleProduct = createAsyncThunk('products/getSingleProduct', async (id) => {
  const response = await axios.get(`https://fakestoreapi.in/api/products/${id}`);
  return response.data.product;
});

// fiterByCategory
const filterByCategory = createAsyncThunk('products/filterByCategory', async (category) => {
  const response = await axios.get(`https://fakestoreapi.in/api/products/category?type=${category}`);
  return response.data.products;
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    // getAllProducts
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.isFiltered = false;
    }).addCase(getAllProducts.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    // getSingleProduct
    builder.addCase(getSingleProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(getSingleProduct.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    }).addCase(getSingleProduct.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    // filterByCategory
    builder.addCase(filterByCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.isFiltered = false;
    }).addCase(filterByCategory.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.isFiltered = true;
    }).addCase(filterByCategory.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.isFiltered = false;
    });
  }
});

export { getAllProducts, getSingleProduct, filterByCategory };
export default productSlice.reducer;