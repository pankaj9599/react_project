import React from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="flex  items-center justify-between h-20 max-w-5xl mx-auto">
        <div>
          <NavLink to={"/"}>
            <h1 className="text-black-800 text-transparent-0.4 font-bold text-xl sm:text-2xl tracking-wide cursor-pointer">
              React Redux_Toolkit
            </h1>
          </NavLink>
        </div>
<div className="flex item-center justify-center gap-7">
{/* <input type="text"  placeholder="  search " className="bg-gray-200 rounded-2xl 	border-gray"/> */}
        <ul className="flex list-none items-center space-x-6 text-gray-700 font-semibold">
          <NavLink to={"/"}>
            <li>home</li>
          </NavLink>
          <NavLink to={"/cart"}>
            <li>Cart</li>
          </NavLink>
        </ul>
</div>
      </nav>
    </div>
  );
}

export default Navbar;
