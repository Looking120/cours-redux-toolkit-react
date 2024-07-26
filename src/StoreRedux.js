import { configureStore, createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "todo",
    initialState: [
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
    ],
    reducers: {
 
        addTask: (state, action) => {
            const newTask = {
                id: Date.now(),
                text: action.payload,
                done: false
            };
            state.push(newTask); 
        },

        toggleTask: (state, action) => {
            const task = state.find((t) => t.id === action.payload);
            if (task) {
                task.done = !task.done; 
            }
        },
    
        deleteTask: (state, action) => {
            return state.filter((t) => t.id !== action.payload); 
        }
    }
});

export const {addTask, deleteTask, toggleTask} = todoSlice.actions;


const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
});

export default store;
