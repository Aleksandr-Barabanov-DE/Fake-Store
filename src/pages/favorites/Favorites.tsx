import { FavoritesList } from "@/entities/favorites/ui/FavoritesList";
import { FC } from "react";

export const Favorites: FC = () => {
  return (
    <div className="container">
      <FavoritesList></FavoritesList>
    </div>
  );
};