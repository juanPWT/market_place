import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const cartContext = createContext();

export const useCart = () => {
  return useContext(cartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, qty) => {
    setCartItems([...cartItems, { ...product, qty }]);
  };

  return (
    <cartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </cartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
