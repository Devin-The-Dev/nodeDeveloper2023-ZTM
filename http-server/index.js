// This shows how to make a webserver

// First get the HTTPS module
const https = require('https');

// 3000 is what we'll us for our localhost
const PORT = 3000;

// There are many ways to pull up information on the screen from a server. 
// For this, we're going to store information into objects, nested within an array
const friends = [
    {
        id: 0,
        name: 'Nikola Tesla'
    },
    {
        id:1, 
        name: 'Sir Isaac Newton'
    },
    {
        id: 2,
        name: 'Albert Einstein'
    }
];

// Now we'll create the server. It requires a request and response perameter, even though we just need a response
const server = https.createServer((req, res) => {
    // Index the parts of the url into an array
    const items = req.url.split('/');
    // We'll have content uploaded for one HTML route
    if(items[1] === 'friends') {
        // writeHead() specifies/describes the response. This first perameter is the code number we get from the server
        res.writeHead(200, {
            'Content-type': 'application/json'
        });
        if (items.length === 3){
            // We want to select the 2nd element in the array to specify the friend in our group of friends
            const friendIndex = Number(items[2]);
            // end() is what we're going to output
            res.end(JSON.stringify(friends[friendIndex]));
        } else {
            res.end(JSON.stringify(friends));
        }  
    // Then we'll create one for a different HTML route
    } else if (items[1] === 'messages') {
        // Specify the content
        res.setHeader('Content-Type', 'text/html');
        // Write the content
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello Isaac!</li>');
        res.write('<li>What are your thoughts on astronomy?</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        // End the response
        res.end();
    } else {
        // This is in case a different HTML route is requested
        res.statusCode = 400;
        res.end();
    } 
});

// This is what is going to display our terminal/command prompt
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});