import "../../styles/TodoList/TodoList.css";
import TodoItem from "./TodoItem";
import { FaPlusCircle } from "react-icons/fa";

function ToDolist() {
  return (
    <div className="main-container">
      <TodoItem iconName={"FaClock"} itemName={"Wake up"} />
      <TodoItem iconName={"FaHamburger"} itemName={"Eat breakfast"} />
      <TodoItem iconName={"FaShower"} itemName={"Take a shower"} />
      <div className="add-new-item-container">
        <div className="add-new-icon"></div>
        <input type="text" placeholder="Enter a todo..." />
        <div className="item-round-button" onClick={console.log("clicked")}><FaPlusCircle className="item-icon-white" /></div>
      </div>
    </div>
  );
}
export default ToDolist;
