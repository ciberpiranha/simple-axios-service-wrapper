# simple-axios-service-wrapper
A simple axios-as-service wrapper.

Following this tutorial for [publishing npm packages](https://auth0.com/blog/developing-npm-packages/)

To install via [npm package](https://www.npmjs.com/package/simple-axios-ror-service-wrapper)

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
* Add options in params with default options and not allowed options
* Skip adding header if no CSRF token
* Adding dynamic callback response functions
* Give full axios powers to package
