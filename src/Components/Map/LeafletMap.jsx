import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function MapClickHandler({ onMapClick }) {
  useMapEvents({
    click: (e) => {
      onMapClick(e.latlng);
    },
  });
  return null;
}

export default function LeafletMap() {
  const [markers, setMarkers] = useState([
    { id: 1, position: [51.505, -0.09], label: 'London' },
  ]);

  const mapRef = useRef(null);

  const handleMapClick = (latlng) => {
    const newMarker = {
      id: markers.length + 1,
      position: [latlng.lat, latlng.lng],
      label: `Marker ${markers.length + 1}`
    };
    setMarkers([...markers, newMarker]);
  };

  const removeMarker = (id) => {
    setMarkers(markers.filter(marker => marker.id !== id));
  };

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.invalidateSize();
    }
  }, []);

  return (
    <div className="w-full h-full p-3">
      <div className="rounded-2xl h-full w-full overflow-hidden shadow-lg border border-gray-200">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={3}
          style={{ height: '100%', width: '100%' }}
          className="z-0"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapClickHandler onMapClick={handleMapClick} />

          {markers.map((marker) => (
            <Marker key={marker.id} position={marker.position}>
              <Popup>
                <div className="text-center">
                  <strong className="text-lg">{marker.label}</strong>
                  <p className="text-xs text-gray-600 mt-1">
                    Lat: {marker.position[0].toFixed(4)}, Lng: {marker.position[1].toFixed(4)}
                  </p>
                  <button
                    onClick={() => removeMarker(marker.id)}
                    className="mt-2 bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}