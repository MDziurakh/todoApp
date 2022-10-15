import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    todos: [],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            if(action.payload.replace(/\s/g, '').length <1){
                return
            }
            const todo = {
                id: Math.random()*1000,
                text: action.payload,
                isDone: false
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        doneTodo : (state, action) =>{
            const doneTask = state.todos.find(task => task.id === action.payload);
            doneTask.isDone ? doneTask.isDone = false : doneTask.isDone = true
        },
        clearTodo : (state) =>{
            state.todos = [];
        },
        clearCompletedTodo: (state) => {
            state.todos = state.todos.filter((todo) => todo.isDone !== true);
            },
    }
})

export const {addTodo, removeTodo, doneTodo, clearTodo, clearCompletedTodo} = todoSlice.actions

export default todoSlice.reducer