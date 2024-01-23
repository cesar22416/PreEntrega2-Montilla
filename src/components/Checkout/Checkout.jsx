import {useForm} from 'react-hook-form'
import {useContext, useState} from 'react';
import { CartContext, } from '../context/CartContext';
import {collection, addDoc} from 'firebase/firestore'
import {db} from'../firebaseconfig/firebaseconfig'
export const Checkout = () =>{

   // eslint-disable-next-line no-unused-vars
   const {cart, clearCart} = useContext(CartContext);
    
    const [pedidoId, setPedidoId] = useState("")

    const{ register, handleSubmit} = useForm();
    const comprar = (data) =>{
        const pedido ={
            cliente:data,
            productos:cart,
        }
        console.log(pedido);
        const pedidosRef = collection(db,'pedido')

        addDoc(pedidosRef, pedido)
        .then((doc) =>{
           setPedidoId(doc.id);
           clearCart();
        })
    }

    if (pedidoId){
        return(
            <div>
                <h1>Gracias por tu compra</h1>
                <p>Tu numero de pedido es:{pedidoId}</p>
            </div>
        )
    }


    return (
        
<div>
    <h1>Finalizar compra</h1>
    <form onSubmit={handleSubmit(comprar)} >
      <input type="text" placeholder="Ingresa tu numero" {...register('nombre')}/>
      <input type="email" placeholder="Ingresa tu email" {...register('email')} />
      <input type="phone" placeholder="Ingresa tu numero" {...register('telefono')}/>
      <button type="submit">Comprar</button>
    </form>
</div>

    )
}

export default Checkout
