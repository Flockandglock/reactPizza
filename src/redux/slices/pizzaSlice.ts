import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { PizzaItems } from '../../@types/types';


interface PizzaSliceState {
  items: PizzaItems[];
  status: 'loading' | 'success' | 'error'
}


export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzaStatus',
  async (params) => {
    const {order, sortBy, category, searchValueForRequest, currentPage} = params;
    const {data} = await axios.get(`https://6420812425cb6572104ac358.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${searchValueForRequest}`);
    return data
  }
);

const initialState = {
  items: [],
  status: 'loading'
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    }
  },
  extraReducers: {
    [fetchPizzas.pending]: (state, action) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.status = 'error';
      state.items = [];
    }
  }
});


export const {setItems} = pizzaSlice.actions;

export default pizzaSlice.reducer;