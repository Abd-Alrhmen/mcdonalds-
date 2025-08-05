import { createContext, useState, useEffect } from "react";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
  try {
    const storedCart= localStorage.getItem("cartItems");
  return storedCart ? JSON.parse(storedCart) : [];
  } catch (e) {
    console.warn("Cart data is corrupted");
  return [];
  }});
  
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // AddToCart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }

    });
  };
// RemoveFromCart
  const removeFromCart = (id) =>
    setCartItems((prevItems) => 
      prevItems.filter((item) => item.id !== id)
    );


// IncreaseQuantity 
  const increaseQuantity = (id)=>
    setCartItems((prevItems)=>
      prevItems.map((item) => 
        item.id === id ? {...item, quantity: item.quantity + 1} : item
      )
    );
  
// DecreaseQuantity
  const decreaseQuantity = (id) =>
    setCartItems((prevItems)=>
      prevItems.map((item)=>
        item.id === id ?
        {...item, quantity: item.quantity - 1} : item  
      )
      .filter((item)=>item.quantity > 0)
    );
  

  return (
    <CartContext.Provider 
    value={{
      cartItems,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
    }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
