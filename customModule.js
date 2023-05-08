const request = require('./fakeRequest');
const response = require('./fakeResponse');

// This variable is to demonstrate module caching
// You'd think we'd get "Hello from fakeRequest.js" again, but we don't
// Node has their modules cached (including customs). 
// This is so automatic outputs (global console.logs) are not executed twice
const { REQUEST_TIMEOUT } = require('./fakeRequest');
/////////////////////////////////////////////////////////////////////////////

function makeRequest(url, data) {
    request.send(url, data);
    return response.read();
}

const responseData = makeRequest('https://www.google.com', 'hello');
console.log(responseData);