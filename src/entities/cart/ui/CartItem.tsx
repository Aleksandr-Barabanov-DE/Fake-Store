import { FC } from "react";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../../../entities/cart/model/cartSlice";
import { IProduct } from "../../product/ui/ProductCard";
import { useDispatch } from "react-redux";


interface CardItemProps {
  item: IProduct;
}


export const CartItem: FC<CardItemProps> = ({item}) => {
  const dispatch = useDispatch();


  return (
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
  )
}