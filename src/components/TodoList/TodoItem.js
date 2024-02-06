import { useState } from "react";
import "../../styles/TodoList/TodoItem.css";
import { FaShower, FaClock, FaHamburger } from "react-icons/fa";
//icons link
//https://react-icons.github.io/react-icons/icons/fa/

function chooseIcon(icon) {
  if (icon === "FaShower ") {
    return <FaShower className="item-icon" />;
  } else if (icon === "FaClock") {
    return <FaClock className="item-icon" />;
  } else if (icon === "FaShower") {
    return <FaShower className="item-icon" />;
  } else if (icon === "FaHamburger") {
    return <FaHamburger className="item-icon" />;
  }
}

function TodoItem(props) {
  const icon = props.iconName;
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="item-container">
      {chooseIcon(icon)}
      <div className="item-name"> {props.itemName} </div>
      <label className="item-round-button">
        <input
          type="checkbox"
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <svg
          className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
          aria-hidden="true"
          viewBox="0 0 15 11"
          fill="none"
        >
          <path d="M1 4.5L5 9L14 1" strokeWidth="2" stroke={isChecked? "#fff" : "none"}/>
        </svg>
      </label>
    </div>
  );
}
export default TodoItem;
