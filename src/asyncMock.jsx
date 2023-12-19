
export const getProducts = () =>{
    return new Promise((resolve, rejaect) =>{
        setTimeout(()=>{
            resolve(products);
            rejaect(new Error("Algo salio mal"))
        }, 500)
    })
}


export const getProductById = (productId) => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}


export const getProductByCategory = () =>{
    return new Promise((resolve, rejaect) =>{
        setTimeout(()=>{
            resolve(products);
            rejaect(new Error("Algo salio mal"))
        }, 500)
    })
}
export const products = [{
    id:"1",
    name:'M110',
    price:1500,
    category:'Moto_110',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTByy4J3HGxdAfB2KSyivSSeOYfWPR2AjIZEw&usqp=CAU',
    stock:14,
    description:'Moto 110'
},
{
    id:"2",
    name:'M125',
    price:2500,
    category:'Moto_125',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTByy4J3HGxdAfB2KSyivSSeOYfWPR2AjIZEw&usqp=CAU',
    stock:55,
    description:'Moto 125'
},{
    id:"3",
    name:'M150',
    price:15400,
    category:'Moto_150',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTByy4J3HGxdAfB2KSyivSSeOYfWPR2AjIZEw&usqp=CAU',
    stock:44,
    description:'Moto 110'
},{
    id:"4",
    name:'M150',
    price:15400,
    category:'Moto_150',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTByy4J3HGxdAfB2KSyivSSeOYfWPR2AjIZEw&usqp=CAU',
    stock:44,
    description:'Moto 110'
}
]
