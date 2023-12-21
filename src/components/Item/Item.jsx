/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types, no-unused-vars
import './Item.css'
import { Link} from 'react-router-dom'
const Item =({id,name,img,price,stock}) =>{
    return(
           <article className="ItemCard card">
            <header >
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="itemImg" />
            </picture>
            <section>
                <p>
                    precio:${price}
                </p>
                <p>
                    Stock disponible:{stock}
                </p>
            </section>
            <footer>
               <Link to={`/Item/${id}`} className='btn btn-danger Option'>Ver Detalle</Link>
            </footer>
           </article>

    )
}

export default Item

