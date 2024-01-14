/* eslint-disable react/prop-types */
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import {Link} from 'react-router-dom'
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"


// eslint-disable-next-line no-unused-vars
const ItemDetail = ({id, name, img, category, description, price, stock}) =>{
    const [quantityAdded, setQuantityAdded] = useState(0)
     
    const {addItem} = useContext(CartContext)



    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)
        const item ={
            id,name, price
        }
        addItem (item, quantity)
    }
    return(
        <article className="ItemDetail" >
            <header className="">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemDetailImg"/>
            </picture>
            <section>
                <p className="Info">
                 Categoria: {category}
                </p>

                <p className="Info">
                 Descripcion: {description}
                </p>

                <p className="Info">
                 Precio: ${price}
                </p>
            </section>
            <footer className='ItemFooter'>
           {
            quantityAdded > 0 ?(
               <Link to='/Cart' className="Option btn btn-warning" >Terminar la compra</Link>
            ):(

            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>

            )
}
            </footer>
        </article>
    )
}

export default ItemDetail
