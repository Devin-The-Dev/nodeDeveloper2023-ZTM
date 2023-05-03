// Create urls
const urls = [
    'https://swapi.dev/api/films/',
    'https://swapi.dev/api/planets/'
];

// Create the call
const getData = async function() {
    // "Try" getting a response, "catch" an error if something goes wrong
    try {
        // Create an promise array, but wait for "all" the API requests to finish 
        const [films, planets] = await Promise.all(urls
            // Get the responses in place based on our array index
            .map(url => fetch(url)
            // Actually getting the response
            .then(response => response.json())));

        console.log('Films', films.results);
        console.log('Planets', planets.results);

    } catch (err) {
        console.log('oooooooooops', err);
    }
    
}

// Return the data
getData();