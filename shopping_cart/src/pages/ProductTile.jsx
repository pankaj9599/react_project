import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart, removefromcart } from '../store/slices/cart_slice'

function ProductTile({product}) {

  const dispatch=useDispatch();
const {cart}=useSelector(state=>state);
  function handleaddtocart(){

    dispatch(addtocart(product))
  }
  function handleremovefromcart(){
    dispatch(removefromcart(product.id))
  }

  return (
    <div className='group flex flex-col item-center border-2 border-gray-400  gap-3 p-4 h-[330px] shadow-2xl mt-10 ml-5 rounded-xl '>
    
    <div className='h-[180px]'>
        <img src={product.image} alt={product.title}  className='object-cover h-full w-full rounded-2xl shadow-xl'/>
    </div>
    <div className='flex flex-row'>
       
       <p className='font-bold text-md truncate mt-1  ml-1 w-40 block'>{product.title}</p>
    </div>

        <div><button onClick={cart.some(item=>item.id===product.id)?handleremovefromcart:handleaddtocart} className='bg-green-400 rounded-xl w-40 mt-9'>
          {
cart.some(item=>item.id===product.id)?"Remove from cart":"add to cart"
          }
          </button></div> 
    </div>
  )
}

export default ProductTile
