import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProduct } from '../ui/ProductCard';

export const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

interface ProductsState {
  items: IProduct[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  selectedCategory: string | null;
}

const initialState: ProductsState = {
  items: [],
  status: 'idle',
  selectedCategory: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string | null>) {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        console.error('Error loading products:', action.error);
      });
  },
});

export const { setCategory } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;