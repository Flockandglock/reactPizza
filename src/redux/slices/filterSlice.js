import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortType(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.categoryId = Number(action.payload.params.categoryId);
      state.sort = action.payload.sortInObj;
      state.currentPage = Number(action.payload.params.currentPage);
    }
  },
});

export const selectFilter = (state) => state.filterSlice;


export const {setCategoryId, setSortType, setCurrentPage, setFilters, setSearchValue} = filterSlice.actions;

export default filterSlice.reducer;