import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'; // Install this package for unique IDs

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoList: [
            { id: 1, title: "Test task", description: "Test description", status: "todo" },
            { id: 2, title: "Another task", description: "Another description", status: "todo" },
        ],
    },
    reducers: {
        addTodo: (state, action) => {
            const newTask = {
                id: uuidv4(),
                title: action.payload.title || "New Task",
                description: action.payload.description || "Task Description",
                status: "todo",
            };
            state.todoList = [newTask, ...state.todoList];
        },
        updateTodo: (state, action) => {
            const updatedTask = action.payload;
            const taskId = updatedTask.id;
            state.todoList = state.todoList.map(task =>
                task.id === taskId ? { ...task, ...updatedTask } : task
            );
        },
        markCompleted: (state, action) => {
            const taskId = action.payload.id;
            state.todoList = state.todoList.map(task =>
                task.id === taskId
                    ? { ...task, status: task.status === "todo" ? "completed" : "todo" }
                    : task
            );
        },
        setTodos: (state, action) => {
            const todosList = Array.isArray(action.payload) ? action.payload : [];
            state.todoList = todosList;
        },
        removeTodo: (state, action) => {
            const taskId = action.payload.id;
            state.todoList = state.todoList.filter(task => task.id !== taskId);
        },
        clearTodo: (state) => {
            state.todoList = [];
        },
    },
});

export const {
    addTodo,
    updateTodo,
    setTodos,
    removeTodo,
    clearTodo,
    markCompleted,
} = todoSlice.actions;

const todoReducer = todoSlice.reducer;
export default todoReducer;
