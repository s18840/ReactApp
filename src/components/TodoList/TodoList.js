import { useState } from "react";
import "../../styles/TodoList/TodoList.css";
import TodoItem from "./TodoItem";
import { FaPlusCircle, FaChevronDown } from "react-icons/fa";
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions";

function ToDolist({ todos, addTodo }) {
    const [isClicked, setIsClicked] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [iconValue, setIconValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    //to add handle icon change after clicking chevron
    const handleIconChange = (event) => {
        setIconValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== "") {
            addTodo(inputValue.trim(), iconValue.trim() || "FaPaperclip");
            setInputValue("");
            setIconValue("");
            console.log("Handled add todo: " + inputValue);
        }
    };

    return (
        <div className="main-container">
            <div>
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        iconName={todo.iconName}
                        itemName={todo.itemName}
                    />
                ))}
            </div>
            <div className="add-new-item-container">
                <div
                    className={`add-new-icon ${
                        isClicked ? "add-new-icon -rotated" : ""
                    }`}
                    onClick={() => {
                        setIsClicked(!isClicked);
                        console.log("Clicked chevron");
                    }}
                >
                    <FaChevronDown />
                </div>
                <div>
                    <input
                        className="input"
                        value={inputValue}
                        type="text"
                        placeholder="Enter a todo here..."
                        onChange={handleInputChange}
                    />
                </div>
                <div className="item-round-button" onClick={handleAddTodo}>
                    <FaPlusCircle className="item-icon-white" />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = {
    addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDolist);
