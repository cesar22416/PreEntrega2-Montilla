/*import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CarItem from '../CartItem/CartItem'
import { Link } from "react-router-dom";

const Cart = () =>{
    const{cart, clearCart, totalQuantity, total} = useContext(CartContext)
    
    if(totalQuantity === 0){
        return(
            <div>
                <h1>No hay intems en el carrito</h1>
                <Link to='/' className="Option">Productos</Link>
            </div>
        )
    }
    
    return(
        <div>
            {cart.map(p => <CarItem key={p.id} {...p}/>)}
            <h3>total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/cart' className="Option">Checkout</Link>
        </div>
    )

    
    }
    export default Cart
*/
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CarItem from '../CartItem/CartItem'
import { Link } from "react-router-dom";

const Cart = () => {
    // eslint-disable-next-line no-unused-vars
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay ítems en el carrito</h1>
                <Link to='/' className="Option">Productos</Link>
            </div>
        )
    }

    // Calcular el total sumando los totales individuales de cada producto
    const Total = cart.reduce((accumulator, product) => {
        return accumulator + (product.quantity * product.price);
    }, 0);

    return (
        <div>
            {cart.map(p => <CarItem key={p.id} {...p} />)}
            <h3>Total: ${Total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
    )
}

export default Cart;