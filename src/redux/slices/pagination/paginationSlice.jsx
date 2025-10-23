// redux/slices/pagination/paginationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    paginationState: {}
  },
  reducers: {
    setPaginationState: (state, action) => {
      const { name, currentPage, itemsPerPage } = action.payload;
      state.paginationState[name] = { currentPage, itemsPerPage };
    },
    setCurrentPage: (state, action) => {
      const { name, page } = action.payload;
      if (state.paginationState[name]) {
        state.paginationState[name].currentPage = page;
      }
    },
    setItemsPerPage: (state, action) => {
      const { name, itemsPerPage } = action.payload;
      if (state.paginationState[name]) {
        state.paginationState[name].itemsPerPage = itemsPerPage;
        state.paginationState[name].currentPage = 1; // Reset to first page
      }
    }
  }
});

export const { setPaginationState, setCurrentPage, setItemsPerPage } = paginationSlice.actions;
export default paginationSlice.reducer;

// Selectors
export const selectPaginationState = (state, name) => 
  state.pagination?.paginationState?.[name];

export const selectPaginatedData = (state, name, data) => {
  const paginationState = selectPaginationState(state, name);
  if (!paginationState || !data) return { currentItems: [], totalPages: 0 };

  const { currentPage = 1, itemsPerPage = 10 } = paginationState;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return { currentItems, totalPages, currentPage, itemsPerPage };
};