const REQUEST_TIMEOUT = 500

function encrypt(data) {
    return 'encrypted data';
}

function send(url, data){
    const encryptedData = encrypt(data);
    console.log(`seding ${encryptedData} to ${url}`);
}

module.exports = {
    REQUEST_TIMEOUT,
    send
}

console.log('Hello from fakeRequest.js');