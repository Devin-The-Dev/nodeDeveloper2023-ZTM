const request = require('./fakeRequest');
const response = require('./fakeResponse');

function makeRequest(url, data) {
    request.send(url, data);
    return response.read();
}

const responseData = makeRequest('https://www.google.com', 'hello');
console.log(responseData);