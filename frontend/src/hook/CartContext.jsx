import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types";

const cartContext = createContext();

export const useCart = () => {
  return useContext(cartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, qty) => {
    const newItems = {
      item: product,
      qty: qty,
      total: product.product.price * qty,
    };
    setCartItems([...cartItems, newItems]);
    toast.success("success add to cart");
  };

  const incrementItems = (index) => {
    const updateitems = [...cartItems];

    if (updateitems[index].qty < updateitems[index].item.product.stok) {
      updateitems[index].qty++;
      updateitems[index].total =
        updateitems[index].qty * updateitems[index].item.product.price;
      setCartItems(updateitems);
    }
  };

  const decrementItems = (index) => {
    const updateItems = [...cartItems];
    if (updateItems[index].qty > 1) {
      updateItems[index].qty--;
      updateItems[index].total =
        updateItems[index].total - updateItems[index].item.product.price;
      setCartItems(updateItems);
    }
  };

  const deleteItems = (index) => {
    const updateItems = [...cartItems];

    const indexArray = updateItems.indexOf(index);
    if (indexArray >= -1) {
      updateItems.splice(indexArray, 1);
      setCartItems(updateItems);
    }
  };

  return (
    <cartContext.Provider
      value={{
        cartItems,
        addToCart,
        incrementItems,
        decrementItems,
        deleteItems,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
