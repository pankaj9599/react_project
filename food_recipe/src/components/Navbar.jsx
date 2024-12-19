import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "./Context"; 
function Navbar() {
  const {searchparam,setsearchparam,handlesubmit}=useContext(GlobalContext)
  console.log(searchparam);
  return (
    <nav className="flex justify-between item-conter py-9 container mx-auto flex-col lg:flex-row gap-5 lg-gap-0">
      
      <h2 className="text-2xl font-semibold">
        Food Recipe
        <NavLink
          to={"/"}
          className="text-black hover:text-gray-700 duration-300"
        ></NavLink>
      </h2>

      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="search recipe"
          name="search"
          value={searchparam}
          onChange={(e)=>setsearchparam(e.target.value)}
          className="bg-gray/75 p-5 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-100"
        />
      </form>

      <ul className="flex gap-5">
        <li>
          {" "}
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to={"/favorite"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Favorits
          </NavLink>
        </li>
       
      </ul>
    </nav>
  );
}

export default Navbar;
