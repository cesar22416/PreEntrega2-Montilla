/* eslint-disable react/prop-types */
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'


// eslint-disable-next-line no-unused-vars
const ItemDetail = ({id, name, img, category, description, price, stock}) =>{
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
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('agrgas', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail