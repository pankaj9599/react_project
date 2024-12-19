// import React, { useContext, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { GlobalContext } from "./context";
// import Recipeitemlist from "./Recipeitemlist";
// function Details() {
//   const { id } = useParams();
//   const { recipedetaildata, setrecipedetaildata } = useContext(GlobalContext);
//   // console.log(params)
//   useEffect(() => {
//     async function getrecipedetails() {
//       const response = await fetch(
//         `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
//       );
//       const data = await response.json();
//       setrecipedetaildata(data.data);
//       console.log(data);
//     }
//     getrecipedetails();
//   }, [id]);
//   return (
//     <div className="row-start-2 lg:row-start-auto">
//       <div className="container mx-auto py-10 grid-cols-1 lg:grid-cols-2 gap-10">
//         <div className="h-96 overflow-hidden rounded-xl group">
//           <img
//             src={recipedetaildata?.recipe?.image_url}
//             alt=""
//             className="w-full h-full object-cover block group-hover:scale-105 duration-300"
//           />
//         </div>
//       </div>
//       <div className="flex flex-col gap-3">
//         <span className="text-sm text-cyan-700 ">
//           {recipedetaildata?.recipe?.publisher}
//         </span>
//         <h3 className="font-bold text-2xl truncate text-black">
//           {recipedetaildata?.recipe?.title}
//         </h3>
//         <button className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider shadow-medium  text-white bg-black mt-3">
//           favorites
//         </button>
//         <div>
//           <span className="text-2xl font-semibold text-black ">
//             Ingredients
//           </span>
//           <ul className="flex flex-col gap-3">
//             {recipedetaildata?.recipe?.ingredients.map((ingredient) => (
//               <li>
//                 <span className="text-2xl font-semibold text-black ">
//                   {ingredient.quantity}
//                   {ingredient.unit}
//                 </span>
//                 <span className="text-2xl font-semibold text-black ">{ingredient.descriptions}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Details;
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "./context";
const {favorites,setfavorites}=useContext(GlobalContext)
function Details() {
  const { id } = useParams();
  const { recipedetaildata, setrecipedetaildata } = useContext(GlobalContext);
  const [activeIngredient, setActiveIngredient] = useState(null); // To track the active ingredient for dropdown

function handleaddtofav(e){
console.log(e);
let copyfav=[...favorites];
const index=copyfav.findIndex(item=>item.id===e.id)
if(index===-1)copyfav.push(e)
  else{
copyfav.splice(index)}
setfavorites(copyfav)
}
console.log(favorites,"favorites")
  useEffect(() => {
    async function getrecipedetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      setrecipedetaildata(data.data);
      console.log(data);
    }
    getrecipedetails();
  }, [id]);

  const toggleIngredient = (index) => {
    // Toggle the active ingredient description visibility
    if (activeIngredient === index) {
      setActiveIngredient(null); // Close if the same ingredient is clicked
    } else {
      setActiveIngredient(index); // Open the clicked ingredient
    }

  };


  return (
    <div className="py-10 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="h-96 overflow-hidden rounded-xl group relative shadow-lg">
          <img
            src={recipedetaildata?.recipe?.image_url}
            alt={recipedetaildata?.recipe?.title}
            className="w-full h-full object-cover rounded-xl shadow-lg transform group-hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
        <div className="flex flex-col gap-6">
          <span className="text-sm text-cyan-700 font-medium">
            {recipedetaildata?.recipe?.publisher}
          </span>
          <h3 className="font-bold text-3xl text-black leading-tight">
            {recipedetaildata?.recipe?.title}
          </h3>
          <button onClick={()=>handleaddtofav(recipedetaildata.recipe)} className="p-4 px-10 rounded-lg text-sm uppercase font-semibold tracking-wider shadow-lg bg-black text-white hover:bg-gray-800 transition duration-200">
            Add to Favorites
          </button>
          <div>
            <span className="text-2xl font-semibold text-black">Ingredients</span>
            <ul className="flex flex-col gap-3 mt-4">
              {recipedetaildata?.recipe?.ingredients.map((ingredient, index) => (
                <li key={index} className="flex flex-col gap-1">
                  <div
                    className="text-xl font-medium text-black cursor-pointer hover:text-gray-700"
                    onClick={() => toggleIngredient(index)}
                  >
                    {ingredient.quantity} {ingredient.unit} -{" "}
                    {ingredient.description}
                  </div>
                  {activeIngredient === index && (
                    <div className="mt-2 text-lg text-gray-700">
                      <p>{ingredient.description}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
