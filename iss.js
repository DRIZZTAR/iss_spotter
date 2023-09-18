const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) {
  // Define the API endpoint URL for retrieving the IP address in JSON format
  const apiUrl = 'https://api.ipify.org?format=json';

  // Make a GET request to the API endpoint
  request(apiUrl, (error, response, body) => {
    // Inside the request callback ...

    // Error can be set if there's an issue with the request (invalid domain, user offline, etc.)
    if (error) {
      callback(error, null);
      return;
    }

    // If the HTTP status code is non-200, assume a server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    // If we get here, all's well and we got the data
    // Parse the response body into a JavaScript object
    const data = JSON.parse(body);

    // Extract and pass the IP address to the callback
    const ipAddress = data.ip;
    callback(null, ipAddress);
  });
};

module.exports = { fetchMyIP };