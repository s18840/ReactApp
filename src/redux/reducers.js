import { ADD_TODO } from "./actionTypes";

const initialState = {
    todos: [
        { iconName: "FaClock", itemName: "Wake up" },
        { iconName: "FaHamburger", itemName: "Eat breakfast" },
        { iconName: "FaShower", itemName: "Take a shower" },
        { iconName: "FaPaperclip", itemName: "Work" },
    ],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        default:
            return state;
    }
};

export default todoReducer;
