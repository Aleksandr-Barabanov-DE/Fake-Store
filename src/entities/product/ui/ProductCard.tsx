import { FC } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../cart/model/cartSlice";
import { addToFavorites } from "../../favorites/model/favoritesSlice";
import { setCategory } from '../model/allProductsSlice';
import './ProductCard.scss'
import { RootState } from '../../../app/store';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const ProductCard: FC<{ product: IProduct }> = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.items);

  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const isFavorite = favorites.some((fav) => fav.id === product.id);

  const handleAddtoCart = () => {
    dispatch(addToCart(product));
  };

  const handleAddtoFavorites = () => {
    dispatch(addToFavorites(product));
  };

  const handleFilterByCategory = () => {
    dispatch(setCategory(product.category));
  };

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >  <div className="img-container">
        <img src={product.image} alt={product.title} />
      </div>

      <div>
        <div className="inner-container">
          <button onClick={handleFilterByCategory} className="category-button">
            {product.category}
          </button>
          {isAuthenticated &&
            <button
              onClick={handleAddtoFavorites}
              disabled={isFavorite}
              className={`favorite-button ${isFavorite ? "disabled" : ""}`}
            >
              ❤️
            </button>}
        </div>
        <h3 className="tooltip">
          <span className="tooltip-text">{product.title}</span>
          {product.title}
        </h3>
        <p>{product.price} $</p>
        <button onClick={handleAddtoCart}>Add To Cart</button>
      </div>
    </motion.div>
  );
};
