
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Euro from './Context';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      {/* we have wrapped context around other components */}
   <Euro>       
 
 <BrowserRouter>
 <Navbar />
 <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/cart' element={<Cart/>} />
 </Routes>
 </BrowserRouter>
 </Euro>
    </div>
  );
}

export default App;
