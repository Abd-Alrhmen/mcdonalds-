import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import toast from 'react-hot-toast';
import { CartContext } from '../context/CartContext';
import { SearchContext } from "../context/SearchContext";
import { fetcher } from "../utils/fetcher";

function Menu() {
  const { addToCart } = useContext(CartContext);
  const { searchTrem } = useContext(SearchContext);

  const { data: menuItems, isLoading, isError, error } = useQuery({
    queryKey: ['menu'],
    queryFn: () => fetcher('/Menu.json'),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p className="text-center p-4">Loading menu...</p>;
  if (isError) return <p className="text-center text-red-500 p-4">Error: {error.message}</p>;

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTrem.toLowerCase())
  );

  return (
    <div className="container mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <Helmet>
        <title>Menu - Happy Meal</title>
        <meta name="description" content="Explore the full Happy Meal menu and discover delicious burgers, meals, and offers for everyone." />
        <meta name="keywords" content="Happy Meal Menu, McDonald's Menu, Food, Burgers, Offers" />
      </Helmet>

      {filteredItems.map((item) => (
        <div key={item.id} className="p-4 bg-white rounded-xl shadow">
          <div className="h-40 flex items-center justify-center">
            <img
              className="max-w-full max-h-full object-cover rounded-md p-4"
              src={item.image}
              alt={item.name}
            />
          </div>
          <h3 className="text-xl font-bold mt-2">{item.name}</h3>
          <p className="text-gray-600 leading-[1.5rem] line-clamp-2 min-h-[3rem] ">{item.description}</p>
          <p className="text-red-500 font-semibold mt-2"> ${item.price}</p>
          <button
            onClick={() => {
              addToCart(item)
              toast.success("Added To Cart!");  
            }}
            className="mt-2 px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Menu;
