import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from '@/entities/product/model/allProductsSlice';
import cartReducer from '@/entities/cart/model/cartSlice';
import favoritesReducer from '@/entities/favorites/model/favoritesSlice';
import { categoriesReducer } from '@/entities/product/model/categoriesSlice';
import authReducer from "@/features/auth/model/authSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;