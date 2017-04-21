
[React-intro](https://github.com/FastDevCo/react-intro) is an intro level course to React programming.
Before you arrive to the event we'd like you to take care of some basic things:

* install Node.js (preferably the most recent LTS version)
* install npm
* install webpack (we are using webpack 2)
* any easy static web server (python2 or python3 has a good one for this course)

**!! this is NOT a comprehensive guide, please refer to search engines and online tutorials if you encounter problems !!**


### How do I know if I have everything ready?

For linux & MacOS, you can try these commands:

```
# should print v6.10.2
node --version

# should print 3.10.10 (or similar/above)
npm --version

# should print 2.2.1 (or atleast above 2.0)
webpack --version

# should print 2.x.x or 3.x.x
python --version
```

The final test is to check out our example app. **If this works, you're all set**.

```
git clone git@github.com:FastDevCo/react-intro.git
cd example_solution/
npm install
webpack --config webpack.config.js --watch

# other window, same dir, start your webserver
python -m http.server  # if you went python3

# app should now run on port localhost:8000, check with your browser
```

### Install Node.js

We recommend you use a version manager that makes it easy to jump between different node versions. Some good ones:

* [npm](https://github.com/creationix/nvm)
* [n](https://github.com/tj/n)

**Windows users**:
* https://github.com/coreybutler/nvm-windows
* https://github.com/marcelklehr/nodist

### Install npm

* you probably have this already, make sure with: `npm --version` command.
* if not, check google + official tutorials of whichever version manager / approach you used in the step above

### webpack

```
npm install -g webpack
```

### static web server

Use any of the following:

* python
* https://github.com/indexzero/http-server
* https://gist.github.com/willurd/5720255
