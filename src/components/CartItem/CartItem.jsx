/* eslint-disable react/prop-types */
import{ useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ id, name, quantity, price }) => {
  const { removeItem, updateItem } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeItem(id);
  };

  const handleQuantityChange = (newQuantity) => {
    updateItem(id, newQuantity);
  };

  return (
    <div className="cart-item">
      <div className="item-details">
        <span className="item-name">{name}</span>
        <span className="item-quantity">
          Cantidad:{" "}
          <input
            type="number"
            value={quantity}
            onChange={(e) => handleQuantityChange(e.target.value)}
          />
        </span>
        <span className="item-price">Precio: ${price}</span>
        <span className="item-total">Total: ${price * quantity}</span>
        <button onClick={handleRemoveItem}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;