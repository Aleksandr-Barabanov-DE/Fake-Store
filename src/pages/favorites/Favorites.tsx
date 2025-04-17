import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { FavoritesList } from "@/entities/favorites/ui/FavoritesList";
import Swal from "sweetalert2";

export const Favorites: FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  // Если пользователь не авторизован, показываем всплывающее окно
  if (!isAuthenticated) {
    Swal.fire({
      title: "Please log in to access your favorites.",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });
  }

  return (
    <div className="container">
      {isAuthenticated ? (
        <FavoritesList />
      ) : (
        <div className="auth-warning">
        <p>Oops! Looks like you're locked out. Log in to unlock your favorites!</p>
      </div>
      )}
    </div>
  );
};