import React, { useState } from 'react';
import { getAddressFromCoordinates } from '../services/gps-serv.js';

function GpsLocation() {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState('');
  const [address, setAddress] = useState('');

  const getLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setLocation(newLocation);
          setError('');

          try {
            const address = await getAddressFromCoordinates(newLocation.lat, newLocation.lng);
            setAddress(address);
          } catch (error) {
            setError('Error retrieving address: ' + error.message);
          }
        },
        (err) => {
          setError('Error retrieving location: ' + err.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      <button onClick={getLocation}>Get Location</button>
      {location.lat && location.lng ? (
        <p>
          Address: {address}
        </p>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}

export default GpsLocation;
