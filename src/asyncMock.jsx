
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
    stock:20,
    description:'Moto 110'
},{
    id:"1.1",
    name:'M110',
    price:1500,
    category:"motouno",
    img:'https://lamoto.com.ar/wp-content/uploads/2021/06/Moto-cub-piloto-y-pasajero-accion.jpg',
    stock:20,
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
    id:"2.2",
    name:'M125',
    price:2500,
    category:'MotoDos',
    img:'https://www.clarin.com/img/2021/12/01/Vzp1TLfvv_720x0__1.jpg',
    stock:55,
    description:'Moto 125'
},{
    id:"3",
    name:'M150',
    price:15400,
    category:'MotoTres',
    img:'https://www.aboutespanol.com/thmb/u3tE3j89GZvnpjNJ_63HHZpBvTI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/KawasakiNinja-ec7fdb376a5e471ebcc844b5cb2f7594.jpeg',
    stock:44,
    description:'Moto 150'
},{
    id:"3.3",
    name:'M150',
    price:15400,
    category:'MotoTres',
    img:'https://img.freepik.com/fotos-premium/estudiante-masculino-posa-moto-montando-motordrome-escuela-motos-entrenamiento-motociclistas-principiantes-ciclista-practicando-autoescuela_266732-30816.jpg?w=2000',
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
    id:"4.4",
    name:'M200',
    price:15400,
    category:'MotoCua',
    img:'https://www.galgo.com/wp-content/uploads/2023/04/cafe-racer-yamaha.jpg',
    stock:44,
    description:'Moto 200'
},{
    id:"5",
    name:'M250',
    price:154000,
    category:'MotoCin',
    img:'https://i.pinimg.com/originals/02/68/c6/0268c6511a2aa7e0119ac9e4fc869a8a.jpg',
    stock:4,
    description:'Moto 250'
},{
    id:"5.5",
    name:'M250',
    price:154000,
    category:'MotoCin',
    img:'https://files.cults3d.com/uploaders/26641820/illustration-file/dbc625cb-7841-4fed-98c9-e8de3428f0fd/CB750-RC42-Cafe-Racer-3.jpg',
    stock:4,
    description:'Moto 250'
}

]
