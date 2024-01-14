import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Fototer/Footer';
import { CartProvider } from './components/context/CartContext';
import Cart from './components/Cart/Cart'

function App(){
    return(
            <BrowserRouter>
            <CartProvider>
            <NavBar/>
            <Routes>
           <Route path='/' element={<ItemListContainer/>}/>
           <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
           <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
           </Routes>
            <Footer/>
            </CartProvider>
            </BrowserRouter>
            
    );
}

export default App;