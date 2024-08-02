import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Ecom = createContext()

const Euro = ({ children }) => {

    const [state, setState] = useState([])  //data from api
    const [cart, setCart] = useState([])    // we will add single product inside cart


    useEffect(() => {
        const getData = async () => {
            try {
                const a = await axios.get('https://fakestoreapi.com/products')
                setState(a.data)
            } catch (error) {
             console.log(error)
            }
        }
        getData()
    }, [])



    return (
        // providing values to child components
        <Ecom.Provider value={{ state, cart, setCart }}> 
            {children}
        </Ecom.Provider>
    )
}

export default Euro;