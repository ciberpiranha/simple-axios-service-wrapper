# simple-axios-service-wrapper
A simple axios-as-service wrapper.

Following this tutorial for [publishing npm packages](https://auth0.com/blog/developing-npm-packages/)

To install via npm

`npm i simple-axios-ror-service-wrapper`

Then add in js 
`import http from 'simple-axios-ror-service-wrapper'`
To use do:
```
http.ajax (url, method, data).then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  ```


## TODO
* Better tests
* Skip adding header if no CSRF token
* Adding dynamic response functions
* Give full axios powers to package