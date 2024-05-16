import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Define a custom red icon for the destination marker
const redIcon = new L.Icon({
  iconUrl: "/red-marker-icon.png", // Make sure this file exists in your public directory
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [41, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [map, setMap] = useState(null);

  const parseLatLng = (str) => str.split(",").map(parseFloat);

  // Function to calculate distance between two points
  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const FitBoundsToMarkers = ({ pickup, destination }) => {
    const map = useMap();
    useEffect(() => {
      if (pickup && destination) {
        const bounds = L.latLngBounds([
          parseLatLng(pickup),
          parseLatLng(destination),
        ]);
        map.fitBounds(bounds);
      }
    }, [pickup, destination, map]);
    return null;
  };

  useEffect(() => {
    if (map) {
      map.on("click", handleMapClick);
    }
    return () => {
      if (map) {
        map.off("click", handleMapClick);
      }
    };
  }, [map]);

  // Event handler for when a user clicks on the map
  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    if (!pickup) {
      setPickup(`${lat},${lng}`);
    } else if (!destination) {
      setDestination(`${lat},${lng}`);
    }
  };

  let distance = null;
  if (pickup && destination) {
    const [lat1, lng1] = parseLatLng(pickup);
    const [lat2, lng2] = parseLatLng(destination);
    distance = getDistance(lat1, lng1, lat2, lng2).toFixed(2);
  }

  return (
    <div className="bg-white text-black p-12">
      <div className="flex flex-row h-screen border-[#B20404] border-2">
        <div className="flex-grow w-2/3">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: "100%" }}
            whenCreated={setMap}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {pickup && (
              <Marker position={parseLatLng(pickup)}>
                <Popup>Pickup Point</Popup>
              </Marker>
            )}
            {destination && (
              <Marker position={parseLatLng(destination)} icon={redIcon}>
                <Popup>Destination Point</Popup>
              </Marker>
            )}
            <FitBoundsToMarkers pickup={pickup} destination={destination} />
          </MapContainer>
        </div>
        <div className="bg-gray-100 p-4 w-1/3">
          <label className="block mb-2">Pickup Point:</label>
          <input
            type="text"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-md p-2 mb-2"
            placeholder="Enter pickup point (lat,lng)"
          />
          <label className="block mb-2">Destination Point:</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full border bg-white border-gray-300 rounded-md p-2 mb-2"
            placeholder="Enter destination point (lat,lng)"
          />
          {distance && <div className="text-lg font-bold">Distance: {distance} km</div>}
        </div>
      </div>
    </div>
  );
};

export default Map;
