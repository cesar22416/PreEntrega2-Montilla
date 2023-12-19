/* eslint-disable react/prop-types */
import Item from '../Item/Item.jsx'

const ItemList = ({products}) =>{
    return(
        <div className='ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}
export default ItemList