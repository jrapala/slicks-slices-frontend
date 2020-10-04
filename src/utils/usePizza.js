import { useState, useContext } from 'react';

import OrderContext from '../components/OrderContext';

export default function usePizza({ pizzas, inputs }) {
  // Move to provider
  // const [order, setOrder] = useState([]);

  const [order, setOrder] = useContext(OrderContext);

  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }

  function removeFromOrder(index) {
    setOrder([...order.slice(0, index), ...order.slice(index + 1)]);
  }

  // TODO Send this data to a serverless function when they check out

  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
