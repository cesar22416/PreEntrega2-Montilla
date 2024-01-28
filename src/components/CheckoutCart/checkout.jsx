import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseconfig/firebaseconfig';
import './checkout.css';

export const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [pedidoId, setPedidoId] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: cart,
    };

    console.log(pedido);

    const pedidosRef = collection(db, 'pedido');

    addDoc(pedidosRef, pedido)
      .then((doc) => {
        setPedidoId(doc.id);
        clearCart();
      });
  };

  if (pedidoId) {
    return (
      <div className='end'>
        <h1>Gracias por tu compra</h1>
        <p>Tu número de pedido es: {pedidoId}</p>
      </div>
    );
  }

  return (
    <div className='card check'>
      <div>
        <h1>Finalizar compra</h1>
        {cart.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          <form  className='checkchil' onSubmit={handleSubmit(comprar)}>
            <input className='input-group flex-nowrap' type="text" placeholder="Ingresa tu número" {...register('nombre', { required: true })} />
            {errors.nombre && <p>Este campo es requerido</p>}
            <input type="email" placeholder="Ingresa tu email" {...register('email', { required: true })} />
            {errors.email && <p>Este campo es requerido</p>}
            <input type="phone" placeholder="Ingresa tu número" {...register('telefono', { required: true })} />
            {errors.telefono && <p>Este campo es requerido</p>}
            <button className='btn btn-warning' type="submit" disabled={cart.length === 0}>Comprar</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Checkout;
