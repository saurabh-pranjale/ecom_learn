import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoBagHandleOutline } from "react-icons/io5";
import { Ecom } from '../Context';


const Navbar = () => {
  const {cart} = useContext(Ecom)
  return (
    <div className='w-100 bg-dark text-white py-3 d-flex flex-row justify-content-evenly'>
        <Link to={'/'} style={{textDecoration:'none',color:'aliceblue',fontSize:'1.1rem',fontWeight:'bold'}}>Home</Link>
        {/* we have use react-icon here */}
        <Link to={'/cart'} style={{textDecoration:'none',color:'aliceblue',fontSize:'1.1rem',fontWeight:'bold'}}><IoBagHandleOutline size={25} />{cart.length}</Link>
    </div>
  )
}

export default Navbar