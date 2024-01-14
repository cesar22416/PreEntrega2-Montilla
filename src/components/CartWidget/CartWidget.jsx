import icom from './assets/icom.svg'
import '../CartWidget/assets/cartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {
   const {totalQuantity} = useContext(CartContext)
   return(
      <button className='btn'>
      <Link to='/cart' className='CartW btn btn-danger' state={{display: totalQuantity > 0 ? 'block' : 'none'}}>
      <img src={icom} alt='cart-wdiget' style={{ width: '30px', marginRight: '15px', }}/>
     {totalQuantity}
      </Link>
      </button>
   )
}


export default CartWidget 





