import React from 'react'

function Product({age, data}) {
  return (
    <div className='text-white'> 
    <div className='w-full h-96 bg-zinc-800'>
    <h1>{age}</h1>
    <h1>{data.age}</h1>
    <h1>{data.name}</h1>

    </div>
    </div>
  )
}

export default Product
