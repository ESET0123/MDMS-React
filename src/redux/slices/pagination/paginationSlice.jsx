// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   paginationState: {},
// };

// const paginationSlice = createSlice({
//   name: 'pagination',
//   initialState,
//   reducers: {
//     setPaginationState: (state, action) => {
//       const { name, currentPage, itemsPerPage } = action.payload;
//       state.paginationState[name] = { currentPage, itemsPerPage };
//     },
//     setCurrentPage: (state, action) => {
//       const { name, page } = action.payload;
//       if (state.paginationState[name]) {
//         state.paginationState[name].currentPage = page;
//       }
//     },
//     // Add other actions if needed, like setItemsPerPage
//   },
// });

// export const { setPaginationState, setCurrentPage } = paginationSlice.actions;

// export default paginationSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  paginationState: {},
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPaginationState: (state, action) => {
      const { name, currentPage, itemsPerPage } = action.payload;
      // Ensure paginationState exists before setting properties
      if (!state.paginationState) {
        state.paginationState = {};
      }
      state.paginationState[name] = { currentPage, itemsPerPage };
    },
    setCurrentPage: (state, action) => {
      const { name, page } = action.payload;
      // Ensure paginationState and the specific entry exist
      if (!state.paginationState) {
        state.paginationState = {};
      }
      if (state.paginationState[name]) {
        state.paginationState[name].currentPage = page;
      }
    },
  },
});

export const { setPaginationState, setCurrentPage } = paginationSlice.actions;

export default paginationSlice.reducer;