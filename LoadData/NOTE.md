# Fetch
- Fetch(): is a method used to send a network request and get information from the server.
- Basic syntax: 
    ```js
    let promise = fetch(url, [options])
    ```
    --> options:  optional parameters-  method, headers etc.Without options, this is a simple GET request to download the content of url
- Two stage process: 
    * Fetch returned a promise, with await, resolved an object of Response class. 
    ---> HTTP status check: response_object.ok ? 
    ---> Get HTTP status: response_object.status. Usage example: alert("HTTP-Error: " + response.status);

    * Additional method call to get response body: 
        response.text() – read the response and return as text,
        response.json() – parse the response as JSON,
        response.formData() – return the response as FormData object (explained in the next chapter),
        response.blob() – return the response as Blob (binary data with type),
        response.arrayBuffer() – return the response as ArrayBuffer (low-level representation of binary data),
- Fetch cannot be used in local JS file because fetch is a Web API that's available in browsers but not directly in Node Js
- To use fetch: 
1. Install node-fetch package
```bash
npm init -y  # If you haven't initialized npm
npm install node-fetch
```
2. Import node-fetch
```bash
const fetch =  require('node-fetch');
```
3. Use fetch like normal

# File-system module
- fs is a built-in function, so we just need to call it using require(). Require() is a method used to call : built-in function, installed package, or local files
- Built-in functions: comes pre-installed with Node.js, part of Node.js core functionality and always available to use
- Installed-package: Need installation, stored in node_modules folder and listed in package.json, must be install with "npm install package_name"

## Synchronous Reading ( Block code execution)
- Text file/Json file:
```js
try {
    // Read text file
    const text = fs.readFileSync('./file.txt', 'utf8');
    console.log(text);

    // Read JSON file
    const jsonData = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    console.log(jsonData);
} catch (error) {
    console.error('Error reading file:', error);
}
```
## Asynchronous Reading(non-blocking)
```js
// With callbacks
fs.readFile('./file.txt', 'utf8', (error, data) => {
    if (error) {
        console.error('Error:', error);
        return;
    }
    console.log(data);
});

// With promises (modern approach)
const fsPromises = require('fs').promises;

async function readFileAsync() {
    try {
        const data = await fsPromises.readFile('./file.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
```
## Writting files
```js
const fs = require('fs');

// 1. Synchronous Writing
try {
    // Write text file
    fs.writeFileSync('./output.txt', 'Hello World');

    // Write JSON file
    const data = { name: 'John', age: 30 };
    fs.writeFileSync('./output.json', JSON.stringify(data, null, 2));
} catch (error) {
    console.error('Error writing file:', error);
}

// 2. Asynchronous Writing
// With callbacks
fs.writeFile('./output.txt', 'Hello World', (error) => {
    if (error) {
        console.error('Error:', error);
        return;
    }
    console.log('File written successfully');
});

// With promises
async function writeFileAsync() {
    try {
        await fsPromises.writeFile('./output.txt', 'Hello World');
        console.log('File written successfully');
    } catch (error) {
        console.error('Error:', error);
    }
}
```