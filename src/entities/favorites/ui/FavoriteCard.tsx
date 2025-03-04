import { FC } from "react";
import {
  removeFromFavorites,
} from "../model/favoritesSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "@/entities/cart/model/cartSlice";
import { IProduct } from "@/entities/product/ui/ProductCard";

interface FavoriteCardProps {
  item: IProduct;
}


export const FavoriteCard: FC<FavoriteCardProps> = ({item}) => {
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (id: number) => {
    dispatch(removeFromFavorites(id));
  };

  const handleAddToCartFromFavorites = (item: IProduct) => {
    dispatch(addToCart(item));
  };
  return (
    <div className="product-card">
    <div className="img-container">
      <img
        src={item.image}
        alt={item.title}
        className="product-img"
      />
    </div>
    <h3 className="tooltip">
      <span className="tooltip-text">{item.title}</span>
      {item.title}
    </h3>
    <p>{item.price} $</p>
    <div className="inner-container">
      <button
        className="remove-button"
        onClick={() => handleRemoveFromFavorites(item.id)}
      >
        Delete
      </button>
      <button
        className="add-to-cart-button"
        onClick={() => handleAddToCartFromFavorites(item)}
      >
        Add to cart
      </button>
    </div>
    </div>)
}
