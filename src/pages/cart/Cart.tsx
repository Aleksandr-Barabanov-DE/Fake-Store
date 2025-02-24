import { FC } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { removeFromCart, clearCart, increaseQuantity, decreaseQuantity } from "../../entities/cart/model/cartSlice";
import './Cart.scss';

export const Cart: FC = () => {
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
            <div key={item.id} className="product-card">
              <div className="img-container">
                <img src={item.image} alt={item.title} className="cart-img" />
              </div>
              <div>
                <h3 className="tooltip">
                  <span className="tooltip-text">{item.title}</span>
                  {item.title}
                </h3>
                <p>{item.price} $</p>
                <div className="inner-container">
                  <div className="quantity-controls">
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  </div>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};
