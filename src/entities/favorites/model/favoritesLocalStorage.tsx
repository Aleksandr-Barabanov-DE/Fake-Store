import { IProduct } from "@/entities/product/ui/ProductCard";

export const saveFavoritesToLocalStorage = (favorites: IProduct[]) => {
  try {
    const serializedFavorites = JSON.stringify(favorites);
    localStorage.setItem('favorites', serializedFavorites);
  } catch (e) {
    console.error('Could not save favorites to localStorage', e);
  }
};

export const loadFavoritesFromLocalStorage = (): IProduct[] => {
  try {
    const serializedFavorites = localStorage.getItem('favorites');
    return serializedFavorites ? JSON.parse(serializedFavorites) : [];
  } catch (e) {
    console.error('Could not load favorites from localStorage', e);
    return [];
  }
};