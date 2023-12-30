import { createSlice } from '@reduxjs/toolkit';


type CartItem = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
}

interface CartSliceState {
  totalPice: number;
  items: CartItem[]
}


const initialState: CartSliceState = {
  totalPice: 0,
  items: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
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
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count --;
      }

      state.totalPice = state.totalPice - findItem.price;
    },
    removeItem(state, action) {
      const findRemoveItem = state.items.find((obj) => obj.id === action.payload);
      state.items = state.items.filter((obj) => obj.id !== action.payload);

      state.totalPice = state.totalPice - findRemoveItem.price;
    },
    clearItems(state, action) {
      state.items = [];
      state.totalPice = 0;
    }
  },
});


export const {addItem, removeItem, clearItems, minusItem} = cartSlice.actions;

export default cartSlice.reducer;