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
  linegraphdata: [
    { month: "January", sales: 4200, expenses: 2450 },
    { month: "February", sales: 3100, expenses: 2650 },
    { month: "March", sales: 2300, expenses: 2750 },
    { month: "April", sales: 2650, expenses: 2150 },
    { month: "May", sales: 3400, expenses: 2950 },
    { month: "June", sales: 3800, expenses: 2850 },
    { month: "July", sales: 4700, expenses: 3150 },
    { month: "August", sales: 4500, expenses: 3050 },
    { month: "September", sales: 3900, expenses: 2550 },
    { month: "October", sales: 5200, expenses: 3250 },
    { month: "November", sales: 5700, expenses: 3550 },
    { month: "December", sales: 6200, expenses: 4050 }
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
  billDataWithDetails: [
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
  meterData: [
    {
      meterId: 'M-001',
      zone: 'Zone A',
      owner: 'John Doe',
      status: 'Active',
      lastReading: '256.4 kWh',
    },
    {
      meterId: 'M-002',
      zone: 'Zone B',
      owner: 'Jane Smith',
      status: 'Inactive',
      lastReading: '12.0 kWh',
    },
    {
      meterId: 'M-003',
      zone: 'Zone C',
      owner: 'Alex Johnson',
      status: 'Active',
      lastReading: '501.9 kWh',
    },
    {
      meterId: 'M-004',
      zone: 'Zone A',
      owner: 'Emily Davis',
      status: 'Active',
      lastReading: '345.1 kWh',
    },
    {
      meterId: 'M-005',
      zone: 'Zone B',
      owner: 'Michael Brown',
      status: 'Maintenance',
      lastReading: '189.7 kWh',
    },
  ],
  reportAnalyticsData: [
    {
      "Meter ID": 123,
      "Dates": "2025-10-07T07:15:13Z",
      "User name": "abc",
      "Consumption": "24kWh",
      "Status": "Active"
    },
    {
      "Meter ID": 123,
      "Dates": "2025-10-07T07:15:13Z",
      "User name": "abc",
      "Consumption": "24kWh",
      "Status": "Active"
    },
    {
      "Meter ID": 123,
      "Dates": "2025-10-07T07:15:13Z",
      "User name": "abc",
      "Consumption": "24kWh",
      "Status": "Active"
    },
    {
      "Meter ID": 123,
      "Dates": "2025-10-07T07:15:13Z",
      "User name": "abc",
      "Consumption": "24kWh",
      "Status": "Active"
    },
    {
      "Meter ID": 123,
      "Dates": "2025-10-07T07:15:13Z",
      "User name": "abc",
      "Consumption": "24kWh",
      "Status": "Active"
    },
    {
      "Meter ID": 124,
      "Dates": "2025-10-07T07:15:13Z",
      "User name": "xyz",
      "Consumption": "16kWh",
      "Status": "De-Activated"
    },
    {
      "Meter ID": 124,
      "Dates": "2025-10-07T07:15:13Z",
      "User name": "xyz",
      "Consumption": "16kWh",
      "Status": "De-Activated"
    },
    {
      "Meter ID": 124,
      "Dates": "2025-10-07T07:15:13Z",
      "User name": "xyz",
      "Consumption": "16kWh",
      "Status": "De-Activated"
    },
    {
      "Meter ID": 124,
      "Dates": "2025-10-07T07:15:13Z",
      "User name": "xyz",
      "Consumption": "16kWh",
      "Status": "De-Activated"
    },
    {
      "Meter ID": 124,
      "Dates": "2025-10-07T07:15:13Z",
      "User name": "xyz",
      "Consumption": "16kWh",
      "Status": "De-Activated"
    }
  ],
  zonemanagementData: [
    {
      "Zone ID": 123,
      "Zone name": "Mangalore",
      "Admin assigned": "abc",
      "Total Meters": 5,
      "Status": "Active"
    },
    {
      "Zone ID": 123,
      "Zone name": "Mangalore",
      "Admin assigned": "abc",
      "Total Meters": 6,
      "Status": "Active"
    },
    {
      "Zone ID": 123,
      "Zone name": "Mangalore",
      "Admin assigned": "abc",
      "Total Meters": 8,
      "Status": "Active"
    },
    {
      "Zone ID": 124,
      "Zone name": "Mangalore",
      "Admin assigned": "xyz",
      "Total Meters": 12,
      "Status": "Active"
    },
    {
      "Zone ID": 124,
      "Zone name": "Bajpe",
      "Admin assigned": "xyz",
      "Total Meters": 23,
      "Status": "De-Activated"
    },
    {
      "Zone ID": 124,
      "Zone name": "Bajpe",
      "Admin assigned": "xyz",
      "Total Meters": 34,
      "Status": "De-Activated"
    },
    {
      "Zone ID": 124,
      "Zone name": "Bajpe",
      "Admin assigned": "xyz",
      "Total Meters": 12,
      "Status": "De-Activated"
    },
    {
      "Zone ID": 124,
      "Zone name": "Bajpe",
      "Admin assigned": "xyz",
      "Total Meters": 2,
      "Status": "De-Activated"
    },
    {
      "Zone ID": 124,
      "Zone name": "Bajpe",
      "Admin assigned": "xyz",
      "Total Meters": 7,
      "Status": "De-Activated"
    },
    {
      "Zone ID": 124,
      "Zone name": "Mangalore",
      "Admin assigned": "xyz",
      "Total Meters": 4,
      "Status": "De-Activated"
    }
  ],
  metermanagementENT: [
    {
      "Meter ID": 123,
      "Zone": "Mangalore",
      "Owner": "abc",
      "Status": "Active",
      "Last Reading": "2025-10-07T07:15:13Z"
    },
    {
      "Meter ID": 123,
      "Zone": "Mangalore",
      "Owner": "abc",
      "Status": "Active",
      "Last Reading": "2025-10-07T07:15:13Z"
    },
    {
      "Meter ID": 123,
      "Zone": "Mangalore",
      "Owner": "abc",
      "Status": "Active",
      "Last Reading": "2025-10-07T07:15:13Z"
    },
    {
      "Meter ID": 124,
      "Zone": "Mangalore",
      "Owner": "xyz",
      "Status": "Active",
      "Last Reading": "2025-10-07T07:15:13Z"
    },
    {
      "Meter ID": 124,
      "Zone": "Mangalore",
      "Owner": "xyz",
      "Status": "De-Activated",
      "Last Reading": "2025-10-07T07:15:13Z"
    },
    {
      "Meter ID": 124,
      "Zone": "Mangalore",
      "Owner": "xyz",
      "Status": "De-Activated",
      "Last Reading": "2025-10-07T07:15:13Z"
    },
    {
      "Meter ID": 124,
      "Zone": "Mangalore",
      "Owner": "xyz",
      "Status": "De-Activated",
      "Last Reading": "2025-10-07T07:15:13Z"
    },
    {
      "Meter ID": 124,
      "Zone": "Mangalore",
      "Owner": "xyz",
      "Status": "De-Activated",
      "Last Reading": "2025-10-07T07:15:13Z"
    },
    {
      "Meter ID": 124,
      "Zone": "Mangalore",
      "Owner": "xyz",
      "Status": "De-Activated",
      "Last Reading": "2025-10-07T07:15:13Z"
    },
    {
      "Meter ID": 124,
      "Zone": "Mangalore",
      "Owner": "xyz",
      "Status": "De-Activated",
      "Last Reading": "2025-10-07T07:15:13Z"
    },
    {
      "Meter ID": 125,
      "Zone": "Mangalore",
      "Owner": "pqr",
      "Status": "Active",
      "Last Reading": "2025-10-08T08:20:20Z"
    },
    {
      "Meter ID": 125,
      "Zone": "Mangalore",
      "Owner": "pqr",
      "Status": "Active",
      "Last Reading": "2025-10-08T08:20:20Z"
    },
    {
      "Meter ID": 125,
      "Zone": "Mangalore",
      "Owner": "pqr",
      "Status": "Active",
      "Last Reading": "2025-10-08T08:20:20Z"
    },
    {
      "Meter ID": 126,
      "Zone": "Udupi",
      "Owner": "def",
      "Status": "Active",
      "Last Reading": "2025-10-09T09:30:30Z"
    },
    {
      "Meter ID": 126,
      "Zone": "Udupi",
      "Owner": "def",
      "Status": "De-Activated",
      "Last Reading": "2025-10-09T09:30:30Z"
    },
    {
      "Meter ID": 126,
      "Zone": "Udupi",
      "Owner": "def",
      "Status": "De-Activated",
      "Last Reading": "2025-10-09T09:30:30Z"
    },
    {
      "Meter ID": 127,
      "Zone": "Mangalore",
      "Owner": "ghi",
      "Status": "Active",
      "Last Reading": "2025-10-10T10:45:45Z"
    },
    {
      "Meter ID": 127,
      "Zone": "Mangalore",
      "Owner": "ghi",
      "Status": "Active",
      "Last Reading": "2025-10-10T10:45:45Z"
    },
    {
      "Meter ID": 127,
      "Zone": "Mangalore",
      "Owner": "ghi",
      "Status": "De-Activated",
      "Last Reading": "2025-10-10T10:45:45Z"
    },
    {
      "Meter ID": 128,
      "Zone": "Bajpe",
      "Owner": "jkl",
      "Status": "Active",
      "Last Reading": "2025-10-11T11:50:50Z"
    },
    {
      "Meter ID": 128,
      "Zone": "Bajpe",
      "Owner": "jkl",
      "Status": "Active",
      "Last Reading": "2025-10-11T11:50:50Z"
    },
    {
      "Meter ID": 128,
      "Zone": "Bajpe",
      "Owner": "jkl",
      "Status": "De-Activated",
      "Last Reading": "2025-10-11T11:50:50Z"
    },
    {
      "Meter ID": 129,
      "Zone": "Udupi",
      "Owner": "mno",
      "Status": "Active",
      "Last Reading": "2025-10-12T12:55:55Z"
    },
    {
      "Meter ID": 129,
      "Zone": "Udupi",
      "Owner": "mno",
      "Status": "Active",
      "Last Reading": "2025-10-12T12:55:55Z"
    },
    {
      "Meter ID": 130,
      "Zone": "Mangalore",
      "Owner": "pqr",
      "Status": "Active",
      "Last Reading": "2025-10-13T13:05:05Z"
    },
    {
      "Meter ID": 130,
      "Zone": "Mangalore",
      "Owner": "pqr",
      "Status": "De-Activated",
      "Last Reading": "2025-10-13T13:05:05Z"
    },
    {
      "Meter ID": 130,
      "Zone": "Mangalore",
      "Owner": "pqr",
      "Status": "De-Activated",
      "Last Reading": "2025-10-13T13:05:05Z"
    },
    {
      "Meter ID": 131,
      "Zone": "Bajpe",
      "Owner": "stu",
      "Status": "Active",
      "Last Reading": "2025-10-14T14:10:10Z"
    },
    {
      "Meter ID": 131,
      "Zone": "Bajpe",
      "Owner": "stu",
      "Status": "De-Activated",
      "Last Reading": "2025-10-14T14:10:10Z"
    },
    {
      "Meter ID": 132,
      "Zone": "Udupi",
      "Owner": "vwx",
      "Status": "Active",
      "Last Reading": "2025-10-15T15:15:15Z"
    }
  ],
  datedbillData: [
    { id: 1, date: '2025-10-26', usage: 150, cost: 45 },
    { id: 2, date: '2025-10-25', usage: 120, cost: 36 },
    { id: 3, date: '2025-10-24', usage: 180, cost: 54 },
    { id: 4, date: '2025-10-20', usage: 140, cost: 42 },
    { id: 5, date: '2025-10-15', usage: 160, cost: 48 },
    { id: 6, date: '2025-10-01', usage: 170, cost: 51 },
    { id: 7, date: '2025-09-25', usage: 130, cost: 39 },
  ],
  // searchTerm: '',
  // filterBy: 'name',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    // setSearchTerm: (state, action) => {
    //   state.searchTerm = action.payload;
    // },
    // setFilterBy: (state, action) => {
    //   state.filterBy = action.payload;
    // },
    // Add other actions here
  },
});

export const { setSearchTerm, setFilterBy } = dataSlice.actions;

export default dataSlice.reducer;
