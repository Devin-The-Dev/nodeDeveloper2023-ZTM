// A promise is an object that may produce a single value some time in the future.
// This can be a resolved or rejected value

// We're going to use SWAPI (Star Wars API) to demonstrate promises
const urls = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https://swapi.dev/api/people/4'
]

// We're going to make a promise on all the api requests in the urls array
Promise.all(urls.map(url => {
    return fetch(url).then(people => people.json());
}))
    // Looping through the array to display the requests
    .then(array => {
        for (var i = 0; i < urls.length; i++){
            console.log(`${i + 1}`, array[i]);
        }
    })
    .catch(err => console.log('ughhhh fix it!', err))
    .finally(data => console.log('extra', data));