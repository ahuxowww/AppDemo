import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_TODO, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../types";
const initialState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
 
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodo.fulfilled, (state, action) => {
        state.todoList = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todoList.push(action.payload);
      })
      .addCase(updatedTodo.fulfilled, (state, action) => {
        const {
          payload: { title, id, description, isChecked },
        } = action;
        state.todoList = state.todoList.map((todo) =>
          todo.id === id ? { ...todo, description, title, isChecked } : todo
        );
      })
      .addCase(deletedTodo.fulfilled, (state, action) => {
        state.todoList = state.todoList.filter(
          (todo) => todo.id !== action.payload.id
        );
      });
  },
});

export const getTodo = createAsyncThunk(GET_TODO, async () => {
  const res = await axios.get(
    "https://62ea39ebad295463258761d5.mockapi.io/blogs"
  );
  return res.data;
});

export const addTodo = createAsyncThunk(ADD_TODO, async (newTodo) => {
  const res = await axios.post(
    `https://62ea39ebad295463258761d5.mockapi.io/blogs`,
    {
      id: newTodo.id,
      title: newTodo.title,
      description: newTodo.description,
      isChecked: newTodo.isChecked,
    }
  );
  return res.data;
});

export const updatedTodo = createAsyncThunk(UPDATE_TODO, async (updateTodo) => {
  const res = await axios.put(
    "https://62ea39ebad295463258761d5.mockapi.io/blogs/" + updateTodo.id,
    {
      title: updateTodo.title,
      description: updateTodo.description,
      isChecked: updateTodo.isChecked,
    }
  );
  return res.data;
});

export const deletedTodo = createAsyncThunk(DELETE_TODO, async (removeTodo) => {
  const res = await axios.delete(
    `https://62ea39ebad295463258761d5.mockapi.io/blogs/` + removeTodo.id
  );
  return res.data;
});

export default todoSlice.reducer;
