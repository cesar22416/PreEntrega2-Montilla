/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types, no-unused-vars
import {NavLink, Link} from 'react-router-dom'
const Item =({id,name,img,price,stock}) =>{
    return(
           <article className="card" style={{ width:"15rem", margin:"60px", display:"flex", flexDirection:"column",
           alignContent:"center"}}>
            <header >
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} style={{ width:"50%"}}/>
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
               <Link to={`/Item/${id}`} className='btn btn-warning Option'>Ver Detalle</Link>
            </footer>
           </article>

    )
}

export default Item