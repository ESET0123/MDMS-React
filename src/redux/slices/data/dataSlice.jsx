import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: '1', name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
    { id: '3', name: 'Alex Johnson', email: 'alex.j@example.com', role: 'User' },
    { id: '4', name: 'Emily Davis', email: 'emily.d@example.com', role: 'Manager' },
    { id: '5', name: 'Michael Brown', email: 'michael.b@example.com', role: 'User' },
    { id: '6', name: 'Michael Black', email: 'michael.bl@example.com', role: 'User' },
  ],
  billDataWithDetails : [
    {
      date: '2025-09-01',
      reading: 1540,
      difference: 40,
      notes: 'Standard usage this month.',
    },
    {
      date: '2025-08-01',
      reading: 1500,
      difference: 55,
      notes: 'Higher usage due to summer.',
    },
    {
      date: '2025-07-01',
      reading: 1445,
      difference: 45,
      notes: 'Average consumption.',
    },
    {
      date: '2025-06-01',
      reading: 1400,
      difference: 50,
      notes: 'Increased AC usage.',
    },
    {
      date: '2025-05-01',
      reading: 1350,
      difference: 40,
      notes: 'Normal usage.',
    },
    {
      date: '2025-04-01',
      reading: 1310,
      difference: 35,
      notes: 'Lower usage in spring.',
    },
  ],
  bills: [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
    { id: 4, name: 'Diana', email: 'diana@example.com' },
    { id: 5, name: 'Edward', email: 'edward@example.com' },
    { id: 6, name: 'Fiona', email: 'fiona@example.com' },
    { id: 7, name: 'George', email: 'george@example.com' },
    { id: 8, name: 'Hannah', email: 'hannah@example.com' },
    { id: 9, name: 'Isaac', email: 'isaac@example.com' },
    { id: 10, name: 'Jane', email: 'jane@example.com' },
  ],
 
  searchTerm: '',
  filterBy: 'name',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setFilterBy: (state, action) => {
      state.filterBy = action.payload;
    },
    // Add other actions here
  },
});

export const { setSearchTerm, setFilterBy } = dataSlice.actions;

export default dataSlice.reducer;
