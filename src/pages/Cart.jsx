import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Helmet } from "react-helmet";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container p-8">
      <Helmet>
        <title>Cart - Happy Meal</title>
        <meta
          name="description"
          content="View your selected McDonald's items, update quantities, or complete your Happy Meal order."
        />
        <meta
          name="keywords"
          content="Happy Meal, Cart, McDonald's, Order, Fast Food, Checkout"
        />
      </Helmet>

      <h2 className="text-2xl font-bold mb-6 text-center"> Pay Cart 🛒</h2>

      {cartItems.length === 0 && (
        <div className="flex flex-col justify-center items-center min-h-[30vh]">
          <p className="text-gray-600 text-center">
            Your McDonald&apos;s Cart is empty 🍔
          </p>
        </div>
      )}

      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center gap-4 border-b pb-4 mb-4">
          <div className="w-20 h-20">
            <img
              className="max-h-full max-w-full"
              src={item.image}
              alt={item.name}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="text-base font-bold">{item.price}</p>

            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
              >
                -
              </button>

              <span className="px-3 font-semibold">{item.quantity}</span>

              <button
                onClick={() => increaseQuantity(item.id)}
                className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-4 bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      {cartItems.length > 0 && (
        <div className="text-xl font-bold mt-8">Total : ${totalPrice.toFixed(2)}</div>
      )}
    </div>
  );
}

export default Cart;
