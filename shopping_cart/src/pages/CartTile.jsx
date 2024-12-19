

import React from "react";
import { useDispatch } from "react-redux";
import { removefromcart } from "../store/slices/cart_slice";

function CartTile({ cart }) {
  const dispatch = useDispatch();

  function handleremovefromcart() {
    dispatch(removefromcart(cart.id));
  }

  return (
    <div className="flex items-center border-2 border-gray-400 justify-between shadow-2xl mt-5 mx-5 p-4 rounded-xl">
      <div className="flex w-full">
        {/* Image and Text Container */}
        <div className="flex w-2/3 items-center">
          <img
            src={cart.image}
            alt={cart.title}
            className="h-32 w-32 object-cover rounded-lg"
          />
          <div className="ml-4">
            <h2 className="text-xl font-bold text-gray-800">{cart.title}</h2>
            <p className="text-lg text-gray-600 font-semibold">${cart.price*5}</p>
          </div>
        </div>
        {/* Remove Button */}
        <div className="flex items-center">
          <button
            onClick={handleremovefromcart}
            className="bg-red-500 text-white shadow-7xl rounded-xl px-6 py-2 mt-4"
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartTile;
