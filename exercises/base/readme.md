
### Welcome!

This base project where you will begin to build your own solution. The exercises build on top
of each other and each exercise will contain an example solution.

To get the best experience:
* try to solve on your own without looking at the solution
* ...however, feel free to continue to the solution if you're stuck for any reason
* the idea is to have an "active pace" where learning the ideas & philosophy are more important than
  hunting down typos or debugging with `console.log` all the time
* If something is weird, doesn't work right or you need explanation for something, be brave and ask!


### Installation and running

* install deps:

`npm install`

`npm run dev` - This starts `http-server` to statically serve your files and also webpack with --watch so it recompiles your javascript everytime it sees some changes.


### Developing
* webpack is constantly watching and compiling your JavaScript
* you have the full `es2015` magic at your disposal via babel
  * however, we stick to the basics in our examples in case everyone is not yet familiar with
    `({pure}) => { awesome }`
* head on to `exercise0` to get started :)

### Bonus:
* grab [react dev tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) for Chrome !



### For fiddlers:

What `npm run dev` does?
It uses `concurrently`-named NPM-package to run two commands parallel:

* compile & watch:
`webpack --config webpack.config.js --watch`


* locahost server (you can use node-http, or anything that serves files):
`http-server`

As you can see you can switch the `http-server` to some another such as nginx or when developing lets say pythons webserver module:

`python3 -m http.server`

or `python -m SimpleHTTPServer` if you're some kind of legacy "ops" guy :-)
