
[React-intro](https://github.com/FastDevCo/react-intro) is an intro level course to React programming.
Before you arrive to the event we'd like you to take care of some basic things:

* install Node.js (preferably the most recent LTS version)
* install npm
* install webpack (we are using webpack 2) (optional to install globaly because the course dependencies install it whatsoever)

**!! this is NOT a comprehensive guide, please refer to search engines and online tutorials if you encounter problems !!**


### How do I know if I have everything ready?

For linux & MacOS, you can try these commands:

```
# should print v6.10.2
node --version

# should print 3.10.10 (or similar/above)
npm --version

# ! Optional !
# should print 2.2.1 (or atleast above 2.0)
webpack --version

```

The final test is to check out our example app. **If this works, you're all set**.

```
git clone https://github.com/FastDevCo/react-intro.git
cd example_solution/
npm install
npm run dev

# app should now run on http://localhost:8080, check with your browser
# (if you have something running on that port, close it or edit package.json)

# NOTE: the old (and still working) commands were
npm run build
npm run server

# npm run dev is essentially a shorthand for running both of those 
# at at the same time (and rebuilding when changes happen)

```

### Install Node.js

We recommend you use a version manager that makes it easy to jump between different node versions. Some good ones:

* [npm](https://github.com/creationix/nvm)
* [n](https://github.com/tj/n)

**Windows users**:
* https://github.com/coreybutler/nvm-windows
* https://github.com/marcelklehr/nodist

### Install npm

This is package manager for the node.js and its required.
* you probably have this already, make sure with: `npm --version` command.
* if not, check google + official tutorials of whichever version manager / approach you used in the step above

### webpack (optional)
This package is automaticly installed in `npm install` - section but if you want to install it globally to your computer you can install it like this:
```
npm install -g webpack
```
After that you should be able to use it outside of our project for your own projects or debugging webpack configurations.
