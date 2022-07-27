import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import CartProvider from "./components/store/CartProvider";
import "./App.css";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState(false);
  const shown = () => {
    setDisplay(true);
  };
  const unshown = () => {
    setDisplay(false);
  };
  return (
    <CartProvider>
      {display ? <Cart shown={shown} unshown={unshown} /> : ""}
      <Header shown={shown} unshown={unshown} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
