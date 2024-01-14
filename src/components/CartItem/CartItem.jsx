/* eslint-disable react/prop-types */
const CartItem = ({ id, name, price, quantity }) => {
  return (
    <div className="cart-item">
      <div className="item-details">
        <span className="item-id">{id}</span>
        {name && <span className="item-name">{name}</span>}
        {price && <span className="item-price">${price}</span>}
      </div>
      {quantity && <div className="item-quantity">Quantity: {quantity}</div>}
      {/* Otros detalles del artículo según sea necesario */}
    </div>
  );
};

export default CartItem;