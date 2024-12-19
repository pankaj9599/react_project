import React, { useContext } from "react";
import { GlobalContext } from "./Context";
import Recipeitemlist from "./Recipeitemlist";
function Home() {
  const { recipe, loading } = useContext(GlobalContext);
  if (loading) return <div>Loading the recipes</div>;

  return (
    <div className="py-8 container mx-auto flex  flex-wrap justify-center gap-10">
      {recipe && recipe.length > 0 ? (
        // recipe.map((item) => <Recipeitemlist item={item} />)
        recipe.map((item) => <Recipeitemlist key={item.id} item={item} />)
      ) : (
        <div className="lg:text-4xl text-xl text-center text-black font-extrabold">
          Nothing to show :search something
        </div>
      )}
    </div>
  );
}

export default Home;
