import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { myContext } from './ContextData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function ProductDetails() {

  const { eachProDeatails, id } = useParams()

  const proData = require(`../data/${eachProDeatails}`)

  const data = proData[id]

  const { pickProduct, setProduct, callMethod } = useContext(myContext)

  const CallAddToCart = () => {
    setProduct([...pickProduct, data])
  }

  return (
    <>
      <Link to={`/ProductComp/${eachProDeatails}`}>
        <button className='bg-blue-400 w-20 h-10 ml-4 text-white font-bold'>
          <FontAwesomeIcon icon={faRotateLeft} />
          Back</button>
      </Link>
      <div className='mt-20 flex justify-center items-center'>
        <div className='lg:h-[440px] w-[700px] shadow-2xl flex'>
          <div className='h-[100%] w-[100%]'>
            <img className='object-cover h-[100%] w-[100%]' src={data.image} alt="Dress Images" />
          </div>
          <div className='h-[50%] px-5 w-[100%] flex flex-col justify-around items-center'>
            <p className='font-bold text-[18px]'>{data.title}</p>
            <p>${data.price}</p>
            {
              callMethod(data.title) ? <button className='bg-red-400 border-red-400 h-10 w-36'>Added</button> : <button onClick={() => { CallAddToCart() }} className='bg-blue-400 border-blue-400 h-10 w-36'>Add Cart</button>
            }
          </div>
        </div>
      </div>
    </>
  )
}
