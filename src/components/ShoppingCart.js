import { useReducer } from "react";
import { TYPES } from "../actions/shoppingAction";

import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import ShoppingCartItem from "./ShoppingCartItem";
import ShoppingProductItem from "./ShoppingProductItem";

const ShoppingCard = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  const addToCart = (id) => {
    //console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const deleteCart = (id, all = false) => {
    console.log(id, all);
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_CART, payload: id });
    }
  };
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };
  return (
    <div>
      <h2>Shopping Card</h2>
      <h3>Products</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ShoppingProductItem
            key={product.id}
            data={product}
            addToCart={addToCart}
          />
        ))}
      </article>
      <h2>Cart</h2>
      <article className="box">
        {cart.map((item, index) => (
          <ShoppingCartItem key={index} data={item} deleteCart={deleteCart} />
        ))}
        <button onClick={clearCart}>Clear</button>
      </article>
    </div>
  );
};

export default ShoppingCard;
