import './ItemDetailContainer.css'
import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import  "bootstrap/dist/css/bootstrap.min.css"
import {getDoc, doc} from 'firebase/firestore'
import{db} from '../firebaseconfig/firebaseconfig'





const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() =>{
        setLoading(true)
        const docRef = doc(db, 'products', itemId)
        
        getDoc(docRef)
        .then(response =>{
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted)
        })
        .catch(error => {
            console.error(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [itemId])
     if (loading) {
        return (
            <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }



    return(
        <div className= 'ItemDetailContainer'
        style={{display:"flex",justifyContent:"center", marginTop:"10px"}}>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer