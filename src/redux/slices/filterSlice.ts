import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type Sort = {
  name: string;
  sortProperty: 'rating' | 'price' | 'title' | '-rating' | '-price' | '-title';
}

interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  sort: Sort;
  currentPage: number;
}

interface SetFilterAction {
  categoryId: number;
  sort: {
    name: string;
    sortProperty: string;
  };
  currentPage: number;

}


const initialState: FilterSliceState = {
  searchValue: '',
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating'
  },
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSortType(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.categoryId = Number(action.payload.params.categoryId);
      state.sort = action.payload.sortInObj;
      state.currentPage = Number(action.payload.params.currentPage);
    }
  },
});

export const selectFilter = (state: RootState) => state.filterSlice;


export const {setCategoryId, setSortType, setCurrentPage, setFilters, setSearchValue} = filterSlice.actions;

export default filterSlice.reducer;