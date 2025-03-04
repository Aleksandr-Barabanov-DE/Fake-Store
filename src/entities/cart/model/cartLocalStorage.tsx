import { IProduct } from "@/entities/product/ui/ProductCard";

export const saveCartToLocalStorage = (cart: IProduct[]) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem('cart', serializedCart);
  } catch (e) {
    console.error('Could not save cart to localStorage', e);
  }
};

export const loadCartFromLocalStorage = (): IProduct[] => {
  try {
    const serializedCart = localStorage.getItem('cart');
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (e) {
    console.error('Could not load cart from localStorage', e);
    return [];
  }
};