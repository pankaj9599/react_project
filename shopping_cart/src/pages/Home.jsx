import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from './ProductTile'
function Home() {
  const [products, setproducts] = useState([]);
  // const [search, setsearch] = useState("");
  const [loading, setloading] = useState(false);


  async function fetchdata() {
    setloading(true);
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw console.error();
    }
    setloading(false);
    const data = await response.json();
    data && data.length > 0 ? setproducts(data) : null;
  }

  // using useEgffect to ferch data
  useEffect(() => {
    fetchdata();
  }, []);
  return (

    // we use loading state to show loading 
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center item-center">
          <Circles
            height="120"
            width="120"
            color="gray"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            visible={true}
          />
        </div>
      ) :<div className="min-h-[180vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto p-3">
      {products && products.length > 0 ? (
        products.map((productItem) => <ProductTile key={productItem.id} product={productItem} />)
      ) : (
        <p>No products available.</p>
      )}
    </div>
      }
    </div>
  );
}

export default Home;
