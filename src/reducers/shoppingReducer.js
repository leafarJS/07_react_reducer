import { TYPES } from "../actions/shoppingAction";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "product 1", price: 15.8 },
    { id: 2, name: "product 2", price: 17.8 },
    { id: 3, name: "product 3", price: 19.8 },
    { id: 4, name: "product 4", price: 1.8 },
    { id: 5, name: "product 5", price: 5.8 },
    { id: 6, name: "product 6", price: 15.9 },
    { id: 7, name: "product 7", price: 99.99 },
    { id: 8, name: "product 8", price: 98.99 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      //console.log(newItem);
      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.CLEAR_CART:
      return shoppingInitialState;

    default:
      return state;
  }
}
