import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import './Cart.scss';
import { CartList } from "@/entities/cart/ui/CartList";
import Swal from "sweetalert2";

export const Cart: FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    // Если пользователь не авторизован, показываем всплывающее окно
    if (!isAuthenticated) {
      Swal.fire({
        title: "Please log in to access your cart.",
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
              <CartList/>
            ) : (
              <div className="auth-warning">
                <p>Oops! Looks like you're locked out. Please log in to access your cart.</p>
              </div>
            )}
          </div>
  );
};
