import icom from './assets/icom.svg'
import '../CartWidget/assets/cartWidget.css'


const CartWidget = () => {
   return(
    <button type="button" className="btn btn-danger cartWidget">
<img src={icom} alt='cart-wdiget' style={{ width: '30px', marginRight: '15px', }}/>
     0
    </button>
   )
}


export default CartWidget 





