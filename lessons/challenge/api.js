/* You are asked to create a function that will retrieve some data from an external RESTful API.
The endpoint you need to query is https://jsonplaceholder.typicode.com
The resource we want to get is “posts” and it’s indexed with an incremental id starting from 1, 
which you can use to access a single document in the collection.
Please use only ECMAScript features and no other libraries.
The function you need to create should return just the title property of the object you will get.
    I.e.: GET https://jsonplaceholder.typicode.com/posts/1 will return: 
    As requested, we are only interested in the title property, wrapped in a promise.
Please provide the code of the requested function.*/

// SOLUTION1
// In the browser we would use XMLHttpRequest
const XMLHttpRequest = () => {
  return new Promise(function(resolve, reject) {
    // Set up our HTTP request
    var xhr = new XMLHttpRequest();

    // Setup our listener to process completed requests
    xhr.onload = function() {
      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
        // What do when the request is successful
        const parsed = JSON.parse(xhr.response);
        console.log('success!', parsed.title);
      } else {
        // What do when the request fails
        console.log('The request failed!');
      }

      // Code that should run regardless of the request status
      console.log('This always runs...');
    };

    // Create and send a GET request
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
    xhr.send();
  });
};

// SOLUTION 2
// A more modern approach would be to use fetch API, which wraps our response in a promise by default
/*   fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw error;
      }
    })
    .then(response => response.json())
    .then(body => {
      console.log(body.title);
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`)); */

// SOLUTION 3
// In node we can use the https module
const https = () => {
  return new Promise(function(resolve, reject) {
    const https = require('https');

    var params = {
      host: 'https://jsonplaceholder.typicode.com',
      path: '/posts/1'
    };

    https
      .get(`${params.host}${params.path}`, resp => {
        try {
          let data = '';

          // A chunk of data has been recieved.
          resp.on('data', chunk => {
            data += chunk;
          });

          // The whole response has been received. Print out the result.
          resp.on('end', () => {
            const parsed = JSON.parse(data);
            resolve(parsed.title);
          });
        } catch (error) {
          reject(err);
        }
      })
      .on('error', err => {
        reject(err);
      });
  });
};

// SOLUTION 4
// In node we can also use the request module
const request = () => {
  return new Promise(function(resolve, reject) {
    var request = require('request');

    var options = {
      uri: 'https://jsonplaceholder.typicode.com/posts/1',
      method: 'GET'
    };

    request(options, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        const parsed = JSON.parse(body);
        resolve(parsed.title);
      } else {
        res = 'Not Found';
        reject(error);
      }
    });
  });
};

module.exports = {
  XMLHttpRequest,
  https,
  request
};
