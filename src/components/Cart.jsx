import React, { useContext } from 'react';
import { Ecom } from '../Context';

const Cart = () => {
  const { cart, setCart } = useContext(Ecom);

  console.log(cart);

  const removeItem = (itemId) => { //cart remove wala function 
  
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart([...updatedCart]);
  };

  return (
    <div className='w-100'>
     {/* cart madhe add kelele products */}
      {cart.map(item => (
        <div key={item.id} className='d-flex flex-row justify-content-between align-items-center' style={{ width: '600px', border: '2px solid black', margin: '10px' }}>
          <h3>{item.title}</h3>
          <img src={item.image} alt='imag' style={{width:'50%',height:'6rem'}} />
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
