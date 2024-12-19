import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchparam, setsearchparam] = useState("");
  const [loading,setloading]=useState(false);
  const [recipe,setrecipe]=useState([]);
const [recipedetaildata,setrecipedetaildata]=useState(null)
const [favorites,setfavorites]=useState([]);



  async function handlesubmit(e) {
    e.preventDefault();
    try {
        setloading(true);
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchparam}`);
      if (!response.ok) {
        throw new Error("User not found or API error");
      }
      const data =  await response.json();
          setloading(false);
          setrecipe(data?.data?.recipes)
          setsearchparam("")
          console.log(data);
      
    } catch (ev) {
      console.log(ev);
      setloading(false);
          setsearchparam("")
    }
console.log(loading,recipe)
  }

  return (
    <GlobalContext.Provider
      value={{ searchparam, recipe,loading,setsearchparam, handlesubmit, recipedetaildata,setrecipedetaildata,favorites,setfavorites }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
