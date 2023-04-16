import "./count.css";

const Count = (props) => {
  
  return (
    <div className="count">
      <button className="decrease__btn" onClick={props.decreaseHandler}>
        -
      </button>
      <h3 className="count_el" onChange={(event) => console.log(event.target.outerText)} >
        {props.count}
      </h3>
      {/* <input type="text" name="count_el" className="count_el" value={props.count} onChange={(event) => console.log(event)} id="" /> */}

      <button className="increase__btn" onClick={props.increaseHandler}>
        +
      </button>
    </div>
  );
};

export default Count;
