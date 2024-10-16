import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { myContext } from './ContextData'
export default function CartComp() {

    const { pickProduct, setProduct } = useContext(myContext)

    const [priceset, setPrice] = useState(0)
    // const [getCount,setCount] = useState(0)

    let FilterData;
    const removeItem = (val) => {
        FilterData = pickProduct.filter((fil) => {
            return fil != val
        })
        setProduct(FilterData)
    }

    useEffect(() => {

        const total = pickProduct.reduce((acc, curr) => acc + curr.price, 0);
        setPrice(total);

    }, [pickProduct])

    const Increment = (val) => {
        setPrice(priceset + val.price)
    }
    const Decrement = (val) => {
        setPrice(priceset - val.price)
    }

    return (
        <>
            <div className='w-full h-[83vh] lg:h-[87vh] flex flex-col justify-center items-center'>
                {
                    pickProduct.length === 0 ? <div className='font-bold text-2xl '>No items Added to Cart....</div> :

                        <div className='h-[100%]  w-[96%] flex flex-col justify-center items-center'>

                            <div className='h-[8%] w-[94%] bg-white flex justify-around'>
                                <p className='font-bold text-2xl'>Shop Details</p>
                                <p className='font-bold text-2xl'>Total :{priceset.toFixed(2)} </p>
                            </div>
                            <div className='mt-2 w-[100%] lg:h-[92%] lg:w-[88%] flex gap-14 flex-wrap overflow-scroll'>
                            {
                                pickProduct.map((val) => {
                                    return (
                                        
                                            <div className='lg:h-[200px] lg:w-[370px] shadow-2xl flex'>
                                                <div className='h-[100%] w-[50%]'>
                                                    <img className='object-cover h-[100%] w-[100%]' src={val.image} alt="Dress Images" />
                                                </div>
                                                <div className='h-[100%]  w-[50%] flex flex-col justify-around'>
                                                    <p className='font-bold text-[18px]'>{val.title}</p>
                                                    <p>${val.price}</p>
                                                    <div className='flex justify-around w-44'>
                                                        <button onClick={() => { Increment(val) }} className='font-bold text-2xl'>+</button>
                                                        <button onClick={() => { removeItem(val) }} value={pickProduct} className='bg-blue-400 border-blue-400 w-24 lg:h-10 lg:w-36'>Remove</button>
                                                        <button onClick={() => { Decrement(val) }} className='font-bold text-2xl'>-</button>
                                                    </div>
                                                </div>

                                            </div>
                                        
                                    )
                                })
                            }
                            </div>

                        </div>

                }
            </div>
        </>
    )
}

