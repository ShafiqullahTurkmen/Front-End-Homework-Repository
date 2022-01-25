import { useState, createContext, useEffect, useContext } from "react";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const  [items, setItems]  = useState([]);

  const addToBasket = (data, findBasketItem) => {

    if (!findBasketItem) {
      return  setItems((prev) => [...prev, data]);
    }
    const filtered = items.filter(item => item._id !== findBasketItem._id);
    setItems(filtered);
  }

  const values = {
    items,
    setItems,
    addToBasket
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export {
  BasketProvider,
  useBasket
}
