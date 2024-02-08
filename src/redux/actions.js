import { ADD_TODO } from "./actionTypes";

export const addTodo = (itemName, iconName) => ({
    type: ADD_TODO,
    payload: { itemName, iconName },
});
