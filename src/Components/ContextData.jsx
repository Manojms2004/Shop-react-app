import React, { createContext, useState } from 'react'

const myContext = createContext()

export default function ContextData({children}) {

  const [pickProduct,setProduct] = useState([])
  const [getCartItem,setCartItem] = useState([])
  const [menuOpen, setMenuOpen] = useState(false);

  const callMethod = (title) =>{
    const setBool = pickProduct.some((e) => e.title === title)
    console.log(setBool)
    return setBool;
  }

  return (
  
      <myContext.Provider value={{pickProduct,setProduct,getCartItem,setCartItem,callMethod,menuOpen,setMenuOpen}}>
        {children}
      </myContext.Provider>
    
  )
}

export {myContext}