import { useState } from "react";
import "../../styles/TodoList/TodoItem.css";
import {
    FaShower,
    FaClock,
    FaHamburger,
    FaPaperclip,
    FaBolt,
    FaCamera,
    FaCoffee,
    FaCompass,
    FaDice,
    FaEnvelope,
    FaFire,
    FaGlobe,
    FaHeart,
    FaKey,
    FaUmbrella
} from "react-icons/fa";
//icons link
//https://react-icons.github.io/react-icons/icons/fa/

function chooseIcon(icon) {
    if (icon === "FaShower") {
        return <FaShower className="item-icon" />;
    } else if (icon === "FaClock") {
        return <FaClock className="item-icon" />;
    } else if (icon === "FaHamburger") {
        return <FaHamburger className="item-icon" />;
    } else if (icon === "FaPaperclip") {
        return <FaPaperclip className="item-icon" />;
    } else if (icon === "FaBolt") {
        return <FaBolt className="item-icon" />;
    } else if (icon === "FaCamera") {
        return <FaCamera className="item-icon" />;
    } else if (icon === "FaCoffee") {
        return <FaCoffee className="item-icon" />;
    } else if (icon === "FaCompass") {
        return <FaCompass className="item-icon" />;
    } else if (icon === "FaDice") {
        return <FaDice className="item-icon" />;
    } else if (icon === "FaEnvelope") {
        return <FaEnvelope className="item-icon" />;
    } else if (icon === "FaFire") {
        return <FaFire className="item-icon" />;
    } else if (icon === "FaGlobe") {
        return <FaGlobe className="item-icon" />;
    } else if (icon === "FaHeart") {
        return <FaHeart className="item-icon" />;
    } else if (icon === "FaKey") {
        return <FaKey className="item-icon" />;
    } else if (icon === "FaUmbrella") {
        return <FaUmbrella className="item-icon" />;
    }
}

function TodoItem(props) {
    const icon = props.iconName;
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="item-container">
            <div className="icon-container">{chooseIcon(icon)}</div>
            <div className="item-name"> {props.itemName} </div>
            <label className="item-round-button">
                <input
                    type="checkbox"
                    onChange={() => {
                        setIsChecked(!isChecked);
                    }}
                />
                <svg
                    className={`checkbox ${
                        isChecked ? "checkbox--active" : ""
                    }`}
                    aria-hidden="true"
                    viewBox="0 0 15 11"
                    fill="none"
                >
                    <path
                        d="M1 4.5L5 9L14 1"
                        strokeWidth="2"
                        stroke={isChecked ? "#fff" : "none"}
                    />
                </svg>
            </label>
        </div>
    );
}
export default TodoItem;
