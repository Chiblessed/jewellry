import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import Hero from './components/hero/Hero';
import Menu from './pages/menu/Menu';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

function App() {

  return (
    <>
<BrowserRouter >
<Navbar />
  <Routes>
<Route path='/' Component={Hero} />
<Route path='/menu' element={<Menu category="earrings" />} />
<Route path='/bangle' element={<Menu  category="bangle" />} />
<Route path='/necklace' element={<Menu  category="necklace"/>} />
<Route path='/earring' element={<Menu  category="earrings"/>} />
<Route path='/ring' element={<Menu  category="ring"/>} />

<Route path='/cart' Component={Cart} />
<Route path='/login' Component={Login} />
<Route path='/about' Component={About} />
<Route path='/contact' Component={Contact }/>
  </Routes>
 
</BrowserRouter>
    </>
  )
}

export default App
