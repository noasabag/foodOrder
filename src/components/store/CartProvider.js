import CartContext from "./cart-context";
import { useReducer } from "react";

const cartReducer = (state, action) => {
  console.log("q111");

  if (action.type === "REMOVE_ITEM") {
    let updatedAmount;
    const updatedItems = state.itemsArr.filter((item) => {
      updatedAmount = state.totalAmount - item.price;
      if (item.id === action.id) {
        if (item.amount === 1) {
          return false;
        } else {
          item.amount--;
          return true;
        }
      }
    });
    return { itemsArr: updatedItems, totalAmount: updatedAmount };
  }

  if (action.type === "ADD_ITEM") {
    let a;
    const existIndex = state.itemsArr.findIndex((item) => {
      return item.id === action.item.id;
    });
    if (existIndex === -1) {
      a = state.itemsArr.concat(action.item);
    } else {
      state.itemsArr[existIndex] = {
        ...state.itemsArr[existIndex],
        amount: state.itemsArr[existIndex].amount + action.item.amount,
      };
      a = state.itemsArr;
    }

    const updatedAmount =
      state.totalAmount + action.item.amount * action.item.price;
    return { itemsArr: a, totalAmount: updatedAmount };
  }

  return initialState;
};
const initialState = {
  itemsArr: [],
  totalAmount: 0,
};

const CartProvider = (props) => {
  const [state, dispatchCart] = useReducer(cartReducer, initialState);

  const removeItemFromTheCart = (id) => {
    dispatchCart({ type: "REMOVE_ITEM", id: id });
  };

  const addItemToTheCart = (item) => {
    dispatchCart({ type: "ADD_ITEM", item: item });
  };

  const cartProviderHandler = {
    itemsArr: state.itemsArr,
    totalAmount: state.totalAmount,
    addItem: addItemToTheCart,
    removeItem: removeItemFromTheCart,
  };
  console.log("as");
  return (
    <CartContext.Provider value={cartProviderHandler}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
