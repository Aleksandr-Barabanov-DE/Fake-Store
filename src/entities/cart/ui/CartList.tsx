import { FC } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { clearCart } from "../../../entities/cart/model/cartSlice";
import { CartItem } from "./CartItem";

export const CartList: FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <motion.div
      className="cart"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className='cards-container'>
          <div className="cart-summary">
            <h3>Total: {cart.totalAmount.toFixed(2)} $</h3>
            <button onClick={() => dispatch(clearCart())}>Clear cart</button>
          </div>
          {cart.items.map((item) => (
             <CartItem key={item.id} item = {item}></CartItem>
          ))}
        </div>
      )}
    </motion.div>
  );
};
