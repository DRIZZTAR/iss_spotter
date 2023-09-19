// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

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


    //call fetchISSFlyOverTimes with the retrieved coordinates
    fetchISSFlyOverTimes(coords, (error, flyOverTimes) => {
      if (error) {
        console.log("fetchISSFlyOverTimes didn't work!", error);
        return;
      }

      console.log('fetchISSFlyOverTimes worked! Returned Fly Over Times:', flyOverTimes);
    });
  });
  
});
