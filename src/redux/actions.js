import { ADD_TODO } from "./actionTypes";
import { REMOVE_TODO } from './actionTypes';
import { MOVE_TODO } from './actionTypes';

export const addTodo = (itemName, iconName, status, progress, index) => ({
    type: ADD_TODO,
    payload: { itemName, iconName, status, progress, index },
});

export const removeTodo = (index) => ({
    type: REMOVE_TODO,
    payload: { index }
});

export const moveTodo = (index, newProgress) => ({
    type: MOVE_TODO,
    payload: {
      index,
      newProgress,
    },
  });