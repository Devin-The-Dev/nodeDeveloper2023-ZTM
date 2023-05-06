// How to make an HTTP request

// First we need to grab the http module from the node library
// We're actually going to use the HTTPS module (same difference) instead to keep our data encrypted from anyone snooping around
const { get } = require('https');

// Then we create the https request from the 'get' method. 
// We need to specify our destination (URL). Then a callback function with an input we'll call "res"
get('https://www.google.com', (res) => {
    // Now we're going to get data back from our response. We use the 'on' function to make this happen. 
    // First parameter is the name of our event. The second is a listener as our callback (our parameter can be named anything)
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    });
    // We'll also add an 'end' event. This isn't required. It's just to say "No more data"
    res.on('end', () => {
        console.log('No more data');
    })
});

// So to create an HTTP(S) request, we:
//  - Grab the module
//  - Set up a get request with the URL, and a parameter inside an event listener
//  - console.log the parameter