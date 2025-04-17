import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { FavoritesList } from "@/entities/favorites/ui/FavoritesList";

export const Favorites: FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <div className="container">
      {isAuthenticated ? (
        <FavoritesList />
      ) : (
        <div className="auth-warning">
          <p>Please log in to access your favorites.</p>
        </div>
      )}
    </div>
  );
};