import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/entities/product/ui/ProductCard";
import { saveFavoritesToLocalStorage, loadFavoritesFromLocalStorage } from './favoritesLocalStorage';

interface FavoritesState {
  items: IProduct[];
}


const initialState: FavoritesState = {
  items: loadFavoritesFromLocalStorage(),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<IProduct>) {
      if (!state.items.some(item => item.id === action.payload.id)) {
        state.items.push(action.payload);
        saveFavoritesToLocalStorage(state.items);
      }
    },
    removeFromFavorites(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveFavoritesToLocalStorage(state.items);
    },
    clearFavorites(state) {
      state.items = [];
      saveFavoritesToLocalStorage(state.items);
    },
  },
});

export const { addToFavorites, removeFromFavorites, clearFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;