import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import {
  clearFavorites,
} from "@/entities/favorites/model/favoritesSlice";
import { FavoriteCard } from "./FavoriteCard";

export const FavoritesList: FC = () => {

  const dispatch = useDispatch();

  const favorites = useSelector((state: RootState) => state.favorites.items);

  const clearFavoritesList = () => {
    dispatch(clearFavorites());
  };

  return (
    <div>
      {favorites.length === 0 ? (
        <p>No Selected Items</p>
      ) : (
        <>
          <button className="clear-button" onClick={clearFavoritesList}>
            Clear Favorites
          </button>
          <div className="cards-container">
            {favorites.map((item) => (
             <FavoriteCard key={item.id} item={item}></FavoriteCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
