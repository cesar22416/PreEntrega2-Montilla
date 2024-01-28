/* eslint-disable react/prop-types */
import { useState,useEffect } from "react"
import ItemList from '../ItemList/ItemList'
import { useParams} from 'react-router-dom'
import { getDocs, collection,query,where} from "firebase/firestore"
import{db} from '../firebaseconfig/firebaseconfig'


import  '../Style/miAPP.css'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()
     
    useEffect(() =>{
        setLoading(true)

       const collectionRef = categoryId
       ? query(collection(db, 'products'), where('category', '==' ,categoryId))
       :collection(db,'products')

       getDocs (collectionRef)
       .then(response => {
           const productsAdpted = response.docs.map(doc =>{
              const data = doc.data()
              return {id:doc.id, ...data}
           })
        setProducts(productsAdpted)
       })
        .catch(error =>{
            console.log(error)
      })
       .finally(()=> {
        setLoading(false)
       })

    },[categoryId])



    return(
        <div className='Item-titulo'>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer