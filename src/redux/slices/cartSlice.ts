import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { CartPizzaItem } from '../../@types/types';




interface CartSliceState {
  totalPice: number;
  items: CartPizzaItem[]
}


const initialState: CartSliceState = {
  totalPice: 0,
  items: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartPizzaItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count ++;
      } else {
        state.items.push({...action.payload, count: 1});
      }

      state.totalPice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum
      }, 0);
    },
    minusItem(state, action: PayloadAction<number>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count --;
        state.totalPice = state.totalPice - findItem.price;
      }

      
    },
    removeItem(state, action: PayloadAction<number>) {
      const findRemoveItem = state.items.find((obj) => obj.id === action.payload);
      state.items = state.items.filter((obj) => obj.id !== action.payload);

      if (findRemoveItem) {
        state.totalPice = state.totalPice - findRemoveItem.price;
      }
    },
    clearItems(state, action: PayloadAction<[]>) {
      state.items = [];
      state.totalPice = 0;
    }
  },
});

export const selectCartSice = (state: RootState) => state.cartSlice;
export const selectCartItemById = (id: number) => (state: RootState) => state.cartSlice.items.find(obj => obj.id === id);

export const {addItem, removeItem, clearItems, minusItem} = cartSlice.actions;

export default cartSlice.reducer;