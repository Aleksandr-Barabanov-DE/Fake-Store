import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { removeFromFavorites, clearFavorites } from '../../entities/favorites/model/favoritesSlice';
import { addToCart } from '../../entities/cart/model/cartSlice';
import { IProduct } from '../../entities/product/ui/ProductCard';


export const Favorites: FC = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);

  const handleRemoveFromFavorites = (id: number) => {
    dispatch(removeFromFavorites(id));
  };

  const clearFavoritesList = () => {
    dispatch(clearFavorites());
  };

  const handleAddToCartFromFavorites = (item: IProduct) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="container">

      {favorites.items.length === 0 ? (
        <p>No Selected Items</p>
      ) : (
        <>
          <button className="clear-button" onClick={clearFavoritesList}>
            Clear Favorites
          </button>
          <div className="cards-container">
            {favorites.items.map((item) => (
              <div className="product-card" key={item.id}>
                <div className="img-container">
                  <img src={item.image} alt={item.title} className="product-img" />
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
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};