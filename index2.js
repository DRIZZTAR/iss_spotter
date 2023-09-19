const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPassTimes } = require('./index');

// Call 
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log('It didnt work', error.message);
  })


  
