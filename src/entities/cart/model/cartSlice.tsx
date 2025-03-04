import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@/entities/product/ui/ProductCard';
import { saveCartToLocalStorage, loadCartFromLocalStorage } from './cartLocalStorage';

interface CartItem extends IProduct {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

const loadedCart = loadCartFromLocalStorage() as CartItem[];

const initialState: CartState = {
  items: loadedCart,
  totalAmount: loadedCart.reduce((sum, item) => sum + item.price * item.quantity, 0),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IProduct>) {
      const existingProduct = state.items.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalAmount = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      saveCartToLocalStorage(state.items);
    },

    increaseQuantity(state, action: PayloadAction<number>) {
      const product = state.items.find(item => item.id === action.payload);
      if (product) {
        product.quantity += 1;
        state.totalAmount += product.price;
      }
      saveCartToLocalStorage(state.items);
    },

    decreaseQuantity(state, action: PayloadAction<number>) {
      const product = state.items.find(item => item.id === action.payload);
      if (product) {
        product.quantity -= 1;
        state.totalAmount -= product.price;
        if (product.quantity <= 0) {
          state.items = state.items.filter(item => item.id !== action.payload);
        }
      }
      saveCartToLocalStorage(state.items);
    },

    removeFromCart(state, action: PayloadAction<number>) {
      const product = state.items.find(item => item.id === action.payload);
      if (product) {
        state.totalAmount -= product.price * product.quantity;
        state.items = state.items.filter(item => item.id !== action.payload);
      }
      saveCartToLocalStorage(state.items);
    },

    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
      saveCartToLocalStorage(state.items);
    }
  }
});

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
