import {ADD_TODO, DELETE_TODO, EDIT_TODO} from "./actions";

const initialState = []

export const todoReducer = (state = initialState, action) => {
  let newTodos

  switch (action.type) {
    case ADD_TODO:
      newTodos = [...state]
      newTodos.push(action.payload)
      return newTodos

    case EDIT_TODO:
      return state

    case DELETE_TODO:
      newTodos = [...state]
      const todos = newTodos.filter(t => t.id !== action.payload)
      return todos

    default:
      return state
  }
}