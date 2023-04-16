import "./navbar.css";
import { BiMenuAltLeft, BiShoppingBag } from "react-icons/bi";
import { useState } from "react";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggle = () => {
      props.setIsCartOpen(false);
      setIsOpen((prevState) => !prevState);
  };

  const cartToggle = () => {
      setIsOpen(false);
      props.setIsCartOpen((prevState) => !prevState);
  };



  return (
    <nav>
      <BiMenuAltLeft onClick={menuToggle} />
      <h2>Pizza Menu</h2>
      <div className={`nav__link ${isOpen && "active"}`}>
        <a href="/">Menu</a>
        <a href="/">Deals</a>
        <a href="/">Stores</a>
        <a href="/">Contact</a>
      </div>
      <button className="nav__btn">Order Now</button>
      <BiShoppingBag onClick={cartToggle} />
    </nav>
  );
};

export default Navbar;
