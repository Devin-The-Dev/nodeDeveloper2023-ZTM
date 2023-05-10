// This shows how to make a webserver

// First ge tthe HTTP module
const http = require('http');

// 3000 is what we'll us for our localhost
const PORT = 3000

// Now we'll create the server. It requires a request and response perameter, even though we just need a response
const server = http.createServer((req, res) => {
    // We'll have content uploaded for one HTML route
    if(req.url === '/friends') {
        // writeHead() specifies/describes the response. This first perameter is the code number we get from the server
        res.writeHead(200, {
            'Content-type': 'application/json'
        });
        // end() is what we're goign to output
        res.end(JSON.stringify({
            id:1, 
            name: 'Sir Isaac Newton'
        }));
    // Then we'll create one for a different HTML route
    } else if (req.url === '/messages') {
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

// 
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});