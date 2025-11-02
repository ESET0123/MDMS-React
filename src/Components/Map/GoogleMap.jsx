import React from 'react';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

export default function GoogleMap() {
  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
//   const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  if (!API_KEY) {
    console.error("Google Maps API key not found!");
    return (
      <div className="p-4 bg-red-100 border border-red-400 rounded text-red-700">
        Error: API Key Missing. Please add REACT_APP_GOOGLE_MAPS_API_KEY to your .env file
      </div>
    );
  }

  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        style={{ 
          width: '100%',
          height: '500px',
          borderRadius: '15px'
        }}
        defaultCenter={{ lat: 40.7128, lng: -74.0060 }}
        defaultZoom={10}
        gestureHandling={'greedy'}
        disableDefaultUI={false}
      >
        <AdvancedMarker
          position={{ lat: 40.7128, lng: -74.0060 }}
        />
      </Map>
    </APIProvider>
  );
}
