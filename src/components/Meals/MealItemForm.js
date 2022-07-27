import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
import { useContext, useRef, useState } from "react";
import CartContext from "../store/cart-context";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const cartCTX = useContext(CartContext);

  const [amountValid, setAmountValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    const amountInput = amountInputRef.current.value;
    const amountInputNum = +amountInput;
    if (amountInputNum <= 0) {
      setAmountValid(false);
      return;
    }
    cartCTX.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amountInputNum,
    });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="amount"
        id={props.id}
        input={{ type: "number", min: "1", max: "5", defaultValue: "1" }}
      />
      <button type="submit">add</button>
      {!amountValid && <p>invalid amount</p>}
    </form>
  );
};

export default MealItemForm;
