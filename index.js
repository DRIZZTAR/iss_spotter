// index.js
const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("fetchMyIP didn't work!", error);
    return;
  }

  console.log('fetchMyIP worked! Returned IP:', ip);

  //call fetchCoordsByIP with the retrieved IP address
  fetchCoordsByIP(ip, (error, coords) => {
    if (error) {
      console.log("fetchCoordsByIP didn't work!", error);
      return;
    }

    console.log('fetchCoordsByIP worked! Returned Coords:', coords);
  });
});
