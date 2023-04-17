import { useState } from "react";
import Menu from "../menu/Menu";
import Cart from "../cart/Cart";
import Card from "../../UI/card/Card";
import { product } from "../../product";
import "./main.css";

const Main = (props) => {
  const [cartArray, setCartArray] = useState([]);

  const handleAddToCart = (item) => {
    const newItem = {
      ...item,
      count: 1,
    };

    setCartArray((prevArray) => {
      for (const array of prevArray) {
        if (newItem.id === array.id) {
          return prevArray;
        }
      }
      return [...prevArray, newItem];
    });
  };

  const cards = product.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.img}
        title={item.title}
        price={item.price}
        handleAddToCart={() => handleAddToCart(item)}
      />
    );
  });

  return (
    <main>
      <Menu cards={cards} />
      <Cart
        isCartOpen={props.isCartOpen}
        cartArray={cartArray}
        setCartArray={setCartArray}
      />
    </main>
  );
};

export default Main;
