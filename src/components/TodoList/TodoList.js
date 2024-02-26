import { useState } from "react";
import "../../styles/TodoList/TodoList.css";
import TodoItem from "./TodoItem";
import { FaPlusCircle, FaChevronDown } from "react-icons/fa";
import { connect } from "react-redux";
import { addTodo, removeTodo, moveTodo } from "../../redux/actions";

function ToDolist({ todos, addTodo, removeTodo, moveTodo }) {
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

    const randomIcon = () => {
        const arrayIcons = [
            "FaBolt",
            "FaCamera",
            "FaCoffee",
            "FaCompass",
            "FaDice",
            "FaEnvelope",
            "FaFire",
            "FaGlobe",
            "FaHeart",
            "FaKey",
            "FaUmbrella",
        ];
        const randomIndex = Math.floor(Math.random() * arrayIcons.length);

        return arrayIcons[randomIndex];
    };

    const highestIndex = todos.reduce((maxIndex, todo) => {
        return todo.index > maxIndex ? todo.index : maxIndex;
    }, -1);

    const handleAddTodo = () => {
        if (inputValue.trim() !== "") {
            addTodo(
                inputValue.trim(),
                iconValue.trim() || randomIcon(),
                false,
                "New",
                highestIndex + 1
            );
            setInputValue("");
            setIconValue("");
            console.log("Handled add todo: " + inputValue);
        } else {
            console.log("NO VALUE");
        }
    };

    const handleMoveTodo = (index, newProgress) => {
        console.log("LIST " + newProgress);
        moveTodo(index, newProgress);
    };

    return (
        <div className="to-do-container">
            <div className="main-container ">
                <div className="new">New</div>
                <div>
                    {todos
                        .filter((todo) => todo.progress === "New")
                        .map((todo, index) => (
                            <TodoItem
                                key={index}
                                iconName={todo.iconName}
                                itemName={todo.itemName}
                                status={todo.status}
                                progress={todo.progress}
                                index={todo.index}
                                moveTodo={
                                    handleMoveTodo(todo.index, "In Progress")
                                }
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
                            className={`input-todo ${inputValue.trim() === '' ? 'input-error' : ''}`}
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
            <div className="main-container">
                <div className="inprogress">In Progress</div>
                <div>
                    {todos
                        .filter((todo) => todo.progress === "In Progress")
                        .map((todo, index) => (
                            <TodoItem
                                key={index}
                                iconName={todo.iconName}
                                itemName={todo.itemName}
                                status={todo.status}
                                progress={todo.progress}
                                index={index}
                                moveTodo={
                                    handleMoveTodo(todo.index, "Done")
                                }
                            />
                        ))}
                </div>
            </div>
            <div className="main-container">
                <div className="done">Done</div>
                <div>
                    {todos
                        .filter((todo) => todo.progress === "Done")
                        .map((todo, index) => (
                            <TodoItem
                                key={index}
                                iconName={todo.iconName}
                                itemName={todo.itemName}
                                status={todo.status}
                                progress={todo.progress}
                                index={todo.index}
                                removeTodo={removeTodo}
                            />
                        ))}
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
    removeTodo,
    moveTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDolist);
