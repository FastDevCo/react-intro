
### Welcome! 

This base project where you will begin to build your own solution. The exercises build on top 
of each other and each exercise will contain an example solution. 

To get the best experience:
* try to solve on your own without looking at the solution
* ...however, feel free to continue to the solution if you're stuck for any reason
* the idea is to have an "active pace" where learning the ideas & philosophy are more important than
  hunting down typos or debugging with `console.log` all the time
  
  
### Installation and running

* install deps:

`npm install`

* Optional: install webpack globally:
`npm install -g webpack`
If you don't have rights or don't want to install it globally you can use it from node_modules:
`node_modules/webpack/bin/webpack.js`~ `webpack`

* compile & watch:

`webpack --config webpack.config.js`

* locahost server (you can use node-http, or anything that serves files):

`python3 -m http.server`

or `python -m SimpleHTTPServer` if you're some kind of legacy "ops" guy :-)


### Developing

* keep `webpack` in one terminal window, localhost server in another
* webpack is constantly watching and compiling your JavaScript
* you have the full `es2015` magic at your disposal via babel
  * however, we stick to the basics in our examples in case everyone is not yet familiar with  
    `({pure}) => { awesome }`
* head on to `exercise0` to get started :)

Bonus:
* grab [react dev tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) for Chrome !
