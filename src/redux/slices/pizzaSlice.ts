import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import axios from 'axios';

import { PizzaItems } from '../../@types/types';
import { Status } from '../../@types/types';


interface PizzaSliceState {
  items: PizzaItems[];
  status: Status;
}

interface FetchPizzaArgs {
  order: string;
  sortBy: string;
  category: string;
  searchValueForRequest: string;
  currentPage: string;
}


export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzaStatus',
  async (params: FetchPizzaArgs) => {
    const {order, sortBy, category, searchValueForRequest, currentPage} = params;
    const {data} = await axios.get<PizzaItems[]>(`https://6420812425cb6572104ac358.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${searchValueForRequest}`);

    return data as PizzaItems[];
  }
);

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<PizzaItems[]>) {
      state.items = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state, action) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.items = action.payload;
      })
      .addCase(fetchPizzas.rejected, (state, action) => {
        state.status = Status.ERROR;
        state.items = [];
      })

  }
});


export const {setItems} = pizzaSlice.actions;

export default pizzaSlice.reducer;