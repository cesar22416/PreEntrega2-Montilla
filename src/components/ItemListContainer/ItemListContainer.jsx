/* eslint-disable react/prop-types */
import { useState,useEffect } from "react"
import {getProducts, getProductByCategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams} from 'react-router-dom'
import  '../Style/miAPP.css'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
     
    useEffect(() =>{
        const asyncFunc = categoryId ? getProductByCategory : getProducts
        
        asyncFunc(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(error =>{
            console.log(error)
         } )
    },[categoryId])



    return(
        <div className='Item-titulo'>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer