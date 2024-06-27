import React, { createContext, useState } from "react";
import allProducts from "../../assets/all-product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const getDefaultCart = () => {
    const cart = {};
    allProducts.forEach((product) => {
      cart[product.id] = 0;
    });
    return cart;
  };

  // State for cartItems
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [purchaseConfirmed, setPurchaseConfirmed] = useState(false); // State to track purchase confirmation

  const handleCartCleared = () => {
    setCartItems(getDefaultCart());
    setPurchaseConfirmed(true); // Set purchase confirmed to true when cart is cleared
  };

  const cartCleared = () => {
    handleCartCleared();
    alert('Thank you for your purchase'); // Optionally, show an alert as well
  };
  // Function to add item to cart
  const addToCart = (itemId) => {
    setCartItems((prevCart) => ({
      ...prevCart,
      [itemId]: prevCart[itemId] + 1,
    }));
  };

  // Function to remove item from cart
  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems((prevCart) => ({
        ...prevCart,
        [itemId]: prevCart[itemId] - 1,
      }));
    }
  };

  // Function to calculate total price of items in cart
  const getTotal = () => {
    // Initialize totalAmount to accumulate the sum
    const totalAmount = Object.keys(cartItems).reduce((total, itemId) => {
      // Find the corresponding product information
      const itemInfo = allProducts.find((product) => product.id === Number(itemId));

      // If itemInfo is found and cartItems[itemId] is greater than 0, calculate total price
      if (itemInfo && cartItems[itemId] > 0) {
        return total + itemInfo.price * cartItems[itemId];
      }
      // Otherwise, return current total without adding anything
      return total;
    }, 0); // Start reduce with initial total of 0
    
    return totalAmount;
  };

  const getTotalItems = () => {
    let totalItems = 0;
    for(const item in cartItems){
      if(cartItems[item] > 0){
        totalItems += cartItems[item]
      }
    }
    return totalItems;
  }

  const contextValue = {
    getTotal,
    allProducts,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalItems,
    cartCleared
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
   </ShopContext.Provider>
  );
};

export default ShopContextProvider;
