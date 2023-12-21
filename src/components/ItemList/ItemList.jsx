/* eslint-disable react/prop-types */
import Item from '../Item/Item.jsx'
import '../Style/miAPP.css'

const ItemList = ({products}) =>{
    return(
        <div className="row ListGroup">
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}
export default ItemList