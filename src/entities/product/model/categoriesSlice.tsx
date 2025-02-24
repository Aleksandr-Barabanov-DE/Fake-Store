import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk('categories/fetchAll', async () => {
  const response = await axios.get('https://fakestoreapi.com/products/categories');
  return response.data;
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { items: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        console.error('Error loading categories:', action.error);
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;