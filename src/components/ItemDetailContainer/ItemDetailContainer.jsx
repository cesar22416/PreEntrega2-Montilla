import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import './ItemDetailContainer.css'

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)
    const { itemId } = useParams()

    useEffect(() =>{
        getProductById(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])
    return(
        <div className= 'ItemDetailContainer'
        style={{display:"flex",justifyContent:"center", marginTop:"10px"}}>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer