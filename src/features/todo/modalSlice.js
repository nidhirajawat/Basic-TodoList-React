import { createSlice } from "@reduxjs/toolkit";

// Task create a Modal Slice to manage
// Show Modal
// Hide Modal 
// Toggle Modal

// CRUD:
// Create
// Read 
// Update 
// Delete

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todoList: [{ id: 1, title: "Test task", description: "test Descr", status: "todo" }, { id: 2, title: "Test task", description: "test Descr", status: "todo" }]
    },
    reducers: {
        addTodo: (state) => {
            const newTask = { id: 3, title: "Test task", description: "test Descr" }
            // Add (Push)
            // state.todoList.push(newTask);
            // state.todoList = [...state.todoList, newTask]; // Adding in the last
            state.todoList = [newTask, ...state.todoList]; // Adding in the last
        },
        updateTodo: (state, action) => {
            const updatedTask = action.payload;
            const taskId = updatedTask.id;
            state.todoList = state.todoList.map(task => task.id == taskId ? { ...task, ...updatedTask } : task);
        },
        markCompleted: (state, action) => {
            const task = action.payload;
            const taskId = task.id;
            state.todoList = state.todoList.map(task => task.id == taskId ? { ...task, status: task.status === "todo" ? "completed" : "todo" } : task);
        },
        setTodos: (state, action) => {
            const todosList = action.payload;
            // Redux Todos
            state.todoList = todosList;
        },
        removeTodo: (state, action) => {
            const task = action.payload;
            const taskId = task.id;
            // console.log('removeTodo', state.todoList)
            // state.todoList = [{ id: 1, title: "Test Task from Remove Todo", description: "Todo Description Test" }]
            // Filter
            state.todoList = state.todoList.filter(task => task.id != taskId);
        },
        clearTodo: (state) => {
            // Reset State []
            state.todoList = []
        },
    }
});

export const {
    addTodo,
    updateTodo,
    setTodos,
    removeTodo,
    clearTodo,
    markCompleted
} = todoSlice.actions;

const todoReducer = todoSlice.reducer;
export default todoReducer;