import axios from 'axios';

export const getAddressFromCoordinates = async (latitude, longitude) => {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

  try {
    const response = await axios.get(url);
    if (response.data) {
      const address = response.data.display_name;
      return address;
    } else {
      console.error('Error: No data returned');
      return null;
    }
  } catch (error) {
    console.error('Error fetching address:', error);
    return null;
  }
};

getAddressFromCoordinates(40.730610, -73.935242)
  .then(address => console.log('Address:', address))
  .catch(error => console.error('Error:', error));
