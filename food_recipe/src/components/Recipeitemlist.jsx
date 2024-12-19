import React from 'react'
import { Link } from 'react-router-dom'

function Recipeitemlist({item}) {
  return (
    <div className='flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-2xl gap-5 border-white '>
        
        <div  className='h-40 flex justify-center overflow-hidden item-center rounded-xl'>
      <img src={item?.image_url} alt={item.title} className='block w-full' />
        </div>
      
      <div >
        <span className='text-sm text-cyan-700 '>
        {item.publisher}
        <h3 className='font-bold text-2xl truncate text-black'>{item.title}</h3>
<Link className='text-sm p-3 px-8 rounded-lg uppercase fond-medium inline-block shadow-medium  bg-gray-300' to={`/Recipe_item/${item.id}`}>Recipe Details</Link>
        </span>
      </div>

    </div>
  )
}

export default Recipeitemlist
