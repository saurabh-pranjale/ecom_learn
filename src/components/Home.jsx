import React, { useContext, useState } from 'react';
import { Ecom } from '../Context';
import { Button } from 'react-bootstrap';

const Home = () => {
  // Use context , state, cart, and setCart functions fetch krnya sathi
  const { state, cart, setCart } = useContext(Ecom);
  
  // button wala filter filter
  const [filt, setFilt] = useState("all");

  // Filter products fetch krnay sathi on the selected category
  const filtered = filt === "all" ? state : state.filter((item) => item.category === filt);

  // Function for add krnyasathi item cart madhe 
  function addCart(item) {
    setCart([...cart, item]);
  }

  return (
    <>
     {/* filtere buttons */}
      <div className='border border-1 border-dark mt-2 d-flex flex-row justify-content-evenly mx-auto py-2 w-50'>
        <Button variant="outline-dark" onClick={() => setFilt("all")}>All</Button>
        <Button variant="outline-dark" onClick={() => setFilt("men's clothing")}>Men</Button>
        <Button variant="outline-dark" onClick={() => setFilt("women's clothing")}>Women</Button>
        <Button variant="outline-dark" onClick={() => setFilt("electronics")}>Electronics</Button>
        <Button variant="outline-dark" onClick={() => setFilt("jewelery")}>Jewelry</Button>
      </div>

    
      <div className='w-100 d-flex flex-row justify-content-center flex-wrap'>
        {filtered.map((item) => (
          <div key={item.id} className='w-25 border border-2 border-dark m-4 p-2' style={{ height: 'max-content' }}>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} className='w-100' style={{ objectFit: 'contain', height: '200px' }} />
            <p>{item.description}</p>
            <Button variant="outline-dark" onClick={() => addCart(item)}>Add to Cart</Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
