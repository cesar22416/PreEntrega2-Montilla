
export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products);
            
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


export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
        


    })
}






 const products = [{
    id:"1",
    name:'M110',
    price:1500,
    category:"motouno",
    img:'https://media.gettyimages.com/id/967326474/es/foto/joven-pareja-teniendo-diversi%C3%B3n-scooter-de-montar-a-caballo-en-el-casco-antiguo-europeo.jpg?s=612x612&w=0&k=20&c=GYj5X8X81kc4DakWFxv9k3-SgPRpgYv-HDRPlpMf40Q=',
    stock:2,
    description:'Moto 110'
},{
    id:"2",
    name:'M125',
    price:2500,
    category:'MotoDos',
    img:'https://media.gettyimages.com/id/621912611/es/foto/young-woman-riding-motorcycle-on-empty-road.jpg?s=612x612&w=0&k=20&c=otUEufccSDdHr_CdPDwSA3pZ2iLMErdSgyUleegx4KY=',
    stock:55,
    description:'Moto 125'
},{
    id:"3",
    name:'M150',
    price:15400,
    category:'MotoTres',
    img:'https://media.gettyimages.com/id/1186348217/es/foto/conductor-de-motocicleta-negra.jpg?s=612x612&w=0&k=20&c=F2fBx1oUprPyyxzVqqNphMW6mrLfPOHMYFsU5LXivlg=',
    stock:44,
    description:'Moto 150'
},{
    id:"4",
    name:'M200',
    price:15400,
    category:'MotoCua',
    img:'https://media.gettyimages.com/id/1125235071/es/foto/germany-cologne-young-woman-riding-motorcycle-on-bridge.jpg?s=612x612&w=0&k=20&c=5Zr5u26pjf32R5DV4nokcrq6k5Q_SpxcIhbfX2H3Cag=',
    stock:44,
    description:'Moto 200'
},{
    id:"5",
    name:'M250',
    price:154000,
    category:'MotoCin',
    img:'https://media.gettyimages.com/id/1125235071/es/foto/germany-cologne-young-woman-riding-motorcycle-on-bridge.jpg?s=612x612&w=0&k=20&c=5Zr5u26pjf32R5DV4nokcrq6k5Q_SpxcIhbfX2H3Cag=',
    stock:4,
    description:'Moto 250'
}

]
