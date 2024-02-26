import { ADD_TODO } from "./actionTypes";
import { REMOVE_TODO } from './actionTypes';
import { MOVE_TODO } from './actionTypes';

const initialState = {
    todos: [
        { index: 0, iconName: "FaClock", itemName: "Wake up", status: false, progress: "New" },
        { index: 1,iconName: "FaHamburger", itemName: "Eat breakfast", status: false, progress: "New" },
        { index: 2,iconName: "FaPaperclip", itemName: "Work", status: false, progress: "New" },
        { index: 3,iconName: "FaShower", itemName: "Take a shower", status: false, progress: "In Progress" },
        { index: 4,iconName: "FaClock", itemName: "Sleep", status: false, progress: "Done" },
    ],
};
console.log(initialState.todos)

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo, index) => index !== action.payload.index && todo.progress!=="Done")
            };
        case MOVE_TODO:
                const { index, newProgress } = action.payload;
                const updatedTodos = state.todos.map((todo, i) => {
                  if (i === index) {
                    return {
                      ...todo,
                      progress: newProgress,
                    };
                  }
                  return todo;
                });
                return {
                  ...state,
                  todos: updatedTodos,
                };
        default:
            return state;

    }
};

export default todoReducer;
