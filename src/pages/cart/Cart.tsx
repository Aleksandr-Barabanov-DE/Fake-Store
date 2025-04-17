import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import './Cart.scss';
import { CartList } from "@/entities/cart/ui/CartList";

export const Cart: FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  return (
     
       <div className="container">
            {isAuthenticated ? (
              <CartList/>
            ) : (
              <div className="auth-warning">
                <p>Please log in to access your cart.</p>
              </div>
            )}
          </div>
  );
};
