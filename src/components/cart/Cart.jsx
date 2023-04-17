// import { useState } from "react";
import "./cart.css";
import CartItem from "../../UI/cartItem/CartItem";
import Button from "../../UI/button/Button";

const Cart = (props) => {
  const cartArray = props.cartArray;
  const setCartArray = props.setCartArray;
  
  const handleQuantity = (productId, count) => {
    setCartArray((prevState) => {
      prevState.map(item => {
        if (item.id === productId) {
          item.count = count;
        }
        return item
      })
      return [...prevState];
    });
  };

  const deleteItem = (item) => {
    setCartArray((prevArray) =>
      prevArray.filter((arrayItem) => arrayItem.id !== item.id)
    );
    handleQuantity();
  };

  const handleCheckout = () => {
    if (cartArray.length > 0) {
      alert("Package On The Way");
      setCartArray([]);
    }else{
      alert('No Item In Cart')
    }
  };
  const cartitem = cartArray.map((item) => {
    return (
      <CartItem
        key={item.id}
        id={item.id}
        img={item.img}
        title={item.title}
        price={item.price}
        count={item.count}
        handleQuantity={handleQuantity}
        deleteItem={() => deleteItem(item)}
      />
    );
  });

  return (
    <aside className={`cart ${props.isCartOpen && "active__cart"}`}>
      <h4>Current Orders</h4>
      {cartArray.length > 0 ? cartitem : <h2>Cart Is Empty</h2>}
      <div className="total">
        <h3>Total:</h3>
        <h3>
          ₦
          {cartArray.length > 0
            ? cartArray.reduce((acc, item) => {
                return acc + item.price * item.count;
              }, 0)
            : 0}
        </h3>
      </div>
      <Button text={"Checkout"} onClick={handleCheckout} />
    </aside>
  );
};

export default Cart;
