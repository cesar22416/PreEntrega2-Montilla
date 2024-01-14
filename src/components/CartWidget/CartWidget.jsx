import icom from './assets/icom.svg'
import '../CartWidget/assets/cartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
   const { cart } = useContext(CartContext)

   // Calculate the total quantity
   const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0)

   return(
      <button className='btn btn-danger'>
         <Link to='/cart' className='CartW' state={{display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img src={icom} alt='cart-widget' style={{ width: '30px', marginRight: '15px' }}/>
            {totalQuantity}
         </Link>
      </button>
   )
}

export default CartWidget