import "./card.css";
import Button from "../button/Button";

const Card = (props) => {
  return (
    <div className="card">
      <img src={`photos/${props.img}`} className="card__img" alt={props.title} />
      <div className="card__text">
        <h2 className="card__title">{props.title}</h2>
        <h3 className="card__price">₦{props.price}</h3>
      </div>
      <Button 
        text={"Add To Cart"} 
        onClick={props.handleAddToCart} 
      />
    </div>
  );
};

export default Card;
