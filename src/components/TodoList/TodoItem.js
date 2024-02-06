import "../../styles/TodoList/TodoItem.css";
import { FaShower , FaClock, FaHamburger } from "react-icons/fa";
//icons link
//https://react-icons.github.io/react-icons/icons/fa/

function chooseIcon (icon) {
    if(icon === "FaShower ") {
        return <FaShower  className="item-icon" />
    } else if (icon === "FaClock") {
        return <FaClock className="item-icon" />
    } else if (icon === "FaShower") {
        return <FaShower className="item-icon" />
    } else if (icon === "FaHamburger") {
        return <FaHamburger className="item-icon" />
    }
}

function TodoItem(props) {
    const icon = props.iconName;

  return (
    <div className="item-container">
      {chooseIcon(icon)}
      <div className="item-name"> {props.itemName} </div>
      <div className="item-checkbox-container">
        <input type="checkbox" className="item-checkbox" />
      </div>
    </div>
  );
}
export default TodoItem;
