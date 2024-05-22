import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import Rates from "./Rates";

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
  iconUrl: "/red-marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [41, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapComponent = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pickupCoords, setPickupCoords] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState(null);
  const [map, setMap] = useState(null);
  const [rates, setRates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/rates")
      .then((res) => res.json())
      .then((data) => {
        setRates(data);
      });
  }, []);

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

  const FitBoundsToMarkers = ({ pickupCoords, destinationCoords }) => {
    const map = useMap();
    useEffect(() => {
      if (pickupCoords && destinationCoords) {
        const bounds = L.latLngBounds([pickupCoords, destinationCoords]);
        map.fitBounds(bounds);
      }
    }, [pickupCoords, destinationCoords, map]);
    return null;
  };

  const geocode = async (query) => {
    try {
      const response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
          params: {
            q: query,
            format: "json",
            limit: 1,
          },
        }
      );
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        return [parseFloat(lat), parseFloat(lon)];
      }
      return null;
    } catch (error) {
      console.error("Geocoding error:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchCoordinates = async () => {
      if (pickup) {
        const coords = await geocode(pickup);
        setPickupCoords(coords);
      }
      if (destination) {
        const coords = await geocode(destination);
        setDestinationCoords(coords);
      }
    };
    fetchCoordinates();
  }, [pickup, destination]);

  let distance = null;
  if (pickupCoords && destinationCoords) {
    const [lat1, lng1] = pickupCoords;
    const [lat2, lng2] = destinationCoords;
    distance = getDistance(lat1, lng1, lat2, lng2).toFixed(2);
  }

  return (
    <div className="p-12 bg-white text-black">
      <div className="flex flex-row h-screen border-2 border-[#B20404]">
        <div className="flex-grow">
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
            {pickupCoords && (
              <Marker position={pickupCoords}>
                <Popup>Pickup Point</Popup>
              </Marker>
            )}
            {destinationCoords && (
              <Marker position={destinationCoords} icon={redIcon}>
                <Popup>Destination Point</Popup>
              </Marker>
            )}
            <FitBoundsToMarkers
              pickupCoords={pickupCoords}
              destinationCoords={destinationCoords}
            />
          </MapContainer>
        </div>
        <div className="bg-gray-200 p-4 w-1/3">
          <label className="block mb-2">Pickup Point:</label>
          <input
            type="text"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-md p-2 mb-2"
            placeholder="Enter pickup point by name"
          />
          <label className="block mb-2 ">Destination Point:</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full border bg-white border-gray-300 rounded-md p-2 mb-2"
            placeholder="Enter destination point by name"
          />

          {distance && (
            <div className="text-lg font-bold my-5">
              Distance: {distance} km
            </div>
          )}

          <div>
            {rates.map((rate) => (
              <Rates 
              key={rate._id} 
              rate={rate}
              distance={distance}
              ></Rates>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
