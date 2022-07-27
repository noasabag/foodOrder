import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "../store/cart-context";
import CartButton from "../Layout/CartButton";
const Cart = (props) => {
  const cartCTX = useContext(CartContext);
  const onAddHandler = (item) => {
    cartCTX.addItem({ ...item, amount: 1 });
  };
  const onRemoveHandler = (id) => {
    cartCTX.removeItem(id);
  };
  return (
    <Modal shown={props.shown} unshown={props.unshown}>
      <ul>
        {cartCTX.itemsArr.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              description={item.description}
              amount={item.amount}
              price={item.price}
              onAdd={() => {
                onAddHandler(item);
              }}
              onRemove={() => {
                onRemoveHandler(item.id);
              }}
            />
          );
        })}
      </ul>
      <div className={classes.total}>
        <span>amount</span>
        <span>{cartCTX.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={() => {
            props.unshown();
          }}
        >
          close
        </button>
        {cartCTX.totalAmount > 0 && (
          <button className={classes.button}> order </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
