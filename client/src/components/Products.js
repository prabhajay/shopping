import React from 'react';
import ProductsCard from './ProductsCard';


const Products = ({products}) => {
  
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center '>
        <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>
        Shopping Everyday</h1>
        <span className='w-20 m-3 h-[3px] bg-black'> </span>
        <p className='max-w-[700px] text-gray-600 text-center'>
        Lorem Ipsum Et laboris amet mollit est mollit eu et commodo. Irure proident est irure eu esse elit enim pariatur anim et. 
        Exercitation enim commodo ut duis nostrud consectetur aliqua occaecat consectetur aliqua nostrud labore.
        </p>
        </div>
        <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10 '>
        {
        products.map((item)=>(
        <ProductsCard key={item._id} product={item} />
        ))}
        </div>
    </div>
  )
}

export default Products