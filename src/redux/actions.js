import { ADD_TODO } from "./actionTypes";

export const addTodo = (itemName, icon) => ({
    type: ADD_TODO,
    payload: { itemName, icon },
});
