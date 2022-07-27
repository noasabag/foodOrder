import { useContext, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";
import CartContext from "../store/cart-context";

const CartButton = (props) => {
  const cartCTX = useContext(CartContext);
  const totalAmount = cartCTX.itemsArr.reduce((prevVal, item) => {
    return prevVal + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${classes.bump}`;
  return (
    <button
      className={btnClasses}
      onClick={() => {
        props.shown();
      }}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>your cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
