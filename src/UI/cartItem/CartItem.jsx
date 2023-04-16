import { useState } from "react";
import "./cartitem.css";
import Count from "./count/Count";
import { TiDeleteOutline } from "react-icons/ti";
import { useEffect } from "react";

const CartItem = (props) => {
  const [count, setCount] = useState(1);  
  const {id, handleQuantity} = props;

  useEffect(() =>{
    handleQuantity(id, count);
  },[ id, count])

  const decreaseHandler = () => {
    setCount((prevCount) => {
      if (prevCount === 1) {
        props.deleteItem();
      } else {
        return prevCount - 1;
      }
    });
  };

  const increaseHandler = () => {
    setCount((prevCount) => {
        return prevCount + 1;
    });
  };



  return (
    <div className="cart__item">
      <img
        src={`./photos/${props.img}`}
        alt={props.img}
        className="item__img"
      />

      <div className="item__text">
        <h2>{props.title}</h2>
        <h3>₦{props.price}</h3>
        <Count
          count={count}
          increaseHandler={increaseHandler}
          decreaseHandler={decreaseHandler}
        />
      </div>

      <TiDeleteOutline
        size={"22px"}
        fill={"red"}
        cursor={"pointer"}
        onClick={props.deleteItem}
      />
    </div>
  );
};

export default CartItem;
