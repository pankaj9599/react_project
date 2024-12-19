import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import CartTile from "./CartTile";

function Cart() {
  const [totalcart, settotalcart] = useState(0);
  const { cart } = useSelector((state) => state);
  useEffect(() => {
    settotalcart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  console.log(cart, totalcart);
  return (
    <div>
      {cart && cart.length ? (
        <div className="flex">
        <div className="min-h-[80vh] grid md:grid-cols max-w-6xl ms-auto  ">
          <div className="flex flex-col justify-center item-center p-3">
            {cart.map((cartitem) => (
              <CartTile key={cartitem.id} cart={cartitem} />
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-conter items-end p-5 space-y-5 mt-14">
            <h1 className="font-bold text-lg text-red-700 ">Your cart Summary</h1>
            <p>
            <span className="text-gray-800 font-bold"> Total Item</span>
            <span>:{cart.length}</span>
          </p>
          <p>
            <span className="text-gray-800 font-bold"> Total Amount</span>
            <span>:{Math.floor(totalcart*5)}</span>
          </p>
          </div>

          </div>
          </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-5xl mb-2">
            Your cart is empty
          </h1>
          <NavLink to={"/"}>
            <button className="bg-red-600 rounded-xl w-300  h-100 mt-9 p-5">
              shop now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Cart;
