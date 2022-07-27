import React from "react";
import mealimg from "../Files/mealimg.jpg";
import classes from "./Header.module.css";
import CartButton from "./CartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <CartButton shown={props.shown} unshown={props.unshown} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealimg} alt="food table" />
      </div>
    </React.Fragment>
  );
};
export default Header;
