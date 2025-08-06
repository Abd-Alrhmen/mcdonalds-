import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import toast from 'react-hot-toast';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const OfferProducts = () => {
  const { tag } = useParams();
  const queryClient = useQueryClient();
  const menuItems = queryClient.getQueryData(["menu"]);
  const { addToCart } = useContext(CartContext);

  if (!menuItems) {
    return <p className="text-center p-4">Loading menu...</p>;
  }

  const filteredItems = menuItems.filter((item) =>
    item.tags?.includes(tag)
  );

  return (
    <div className="container p-8 mx-auto">
      <Helmet>
        <title>{tag} Offers - Happy Meal</title>
        <meta name="description" content={`Discover exclusive ${tag} offers at Happy Meal. Enjoy special discounts on our delicious menu!`} />
        <meta name="keywords" content={`Happy Meal ${tag}, ${tag} Offer, McDonald's deals, fast food offers`} />
      </Helmet>

      <h1 className="text-red-700 text-center font-bold text-2xl mb-6">
        Offer {tag}
      </h1>

      {filteredItems.length === 0 ? (
        <p className="text-center text-gray-500">No products found for this offer.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="p-4 bg-white rounded-xl shadow">
              <div className="h-40 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mt-2">{item.name}</h3>
          <p className="text-gray-600 leading-[1.5rem] line-clamp-2 min-h-[3rem] ">{item.description}</p>
              <p className="text-red-500 font-semibold mt-2">${item.price}</p>

              <button
                onClick={() =>{
                  addToCart(item);
                  toast.success("Added To Cart!");  
                }}
                className="mt-2 px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OfferProducts;
