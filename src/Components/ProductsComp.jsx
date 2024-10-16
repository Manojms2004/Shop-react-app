import React, { useContext,useState } from 'react'
import { myContext } from './ContextData'
import { Link, useParams } from 'react-router-dom'

export default function ProductsComp() {
  
  const { eachProduct } = useParams()

  const {pickProduct,setProduct,callMethod} = useContext(myContext)

  const data = require(`../data/${eachProduct}.json`)


  const CallButClick = (get) =>{

    setProduct([...pickProduct,get])
    
  }

  
  return (
    <div className='p-2 h-[89%] lg:p-0 lg:h-[89%] lg:flex lg:flex-col justify-center items-center'>
      <div className=' h-[50px] w-[96%]'>
        <h1 className='font-bold text-2xl'>{data[0].category}</h1>
      </div>
      <div className='lg:gap-8 lg:h-[95%] lg:w-[96%] flex flex-wrap justify-center lg:flex lg:flex-wrap lg:justify-around  h-[94%] overflow-scroll lg:overflow-scroll'>
        {
          data.map((getData) => {
            return (
              <div className=' mt-8 lg:mt-0 h-[500px] w-[340px] lg:h-[480px] lg:w-[360px] shadow-2xl'>
                <Link to={`/ProductDetails/${eachProduct}/${getData.id}`} key={getData.id}>
                  <div className='h-[75%] w-[100%]'>
                    <img className='object-cover h-[100%] w-[100%]' src={getData.image} alt="Dress Images" />
                  </div>
                </Link>
                <div className=' h-[25%] px-5 w-[100%] flex flex-col justify-around'>
                  <p className='font-bold text-[18px]'>{getData.title}</p>
                  <p>${getData.price}</p>
                  {
                     callMethod(getData.title) ?<button  className='bg-red-400 border-red-400 h-10 w-36'>Added</button>:<button onClick={() => CallButClick(getData)} className='bg-blue-400 border-blue-400 h-10 w-36'>Add Cart</button>
                  }
                </div>
              </div>

            )
          })
        }

      </div>
    </div >
  )
}
