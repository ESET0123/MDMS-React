// src/config/api.js

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const API_ENDPOINTS = {
  // User Management
  users: `${API_URL}/users`,
  
  // Dashboard Data
  alerts: `${API_URL}/alerts`,
  dashboardGraphData: `${API_URL}/dashboardgraphdata`,
  colorGraphData: `${API_URL}/colorgraphdata`,
  lineGraphData: `${API_URL}/linegraphdata`,
  
  // Bills & Payments
  bills: `${API_URL}/bills`,
  billPayments: `${API_URL}/bill_payments`,
  billDataWithDetails: `${API_URL}/billDataWithDetails`,
  datedBillData: `${API_URL}/datedbillData`,
  
  // Meter Management
  meterData: `${API_URL}/meterData`,
  meterManagementENT: `${API_URL}/metermanagementENT`,
  
  // Zone Management
  zoneManagementData: `${API_URL}/zonemanagementData`,
  
  // Reports & Analytics
  reportAnalyticsData: `${API_URL}/reportAnalyticsData`,
};

// Helper function to get a specific resource by ID
export const getResourceById = (endpoint, id) => `${endpoint}/${id}`;

// Helper function to build query parameters
export const buildQueryString = (params) => {
  const query = new URLSearchParams(params).toString();
  return query ? `?${query}` : '';
};

// Helper function for API calls with error handling
export const fetchAPI = async (endpoint, options = {}) => {
  try {
    console.log('Fetching:', endpoint); // Debug log
    
    const response = await fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    console.log('Response status:', response.status); // Debug log

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API fetch error:', error);
    
    // More descriptive error messages
    if (error.message.includes('Failed to fetch')) {
      throw new Error('Network error: Unable to reach the server. Please check your internet connection.');
    }
    
    throw error;
  }
};

export default API_URL;