# generator-hero

This generator is meant to be a starting point for constructing your project's own generators, and covers technical issues like Jade helper methods for wiring complex systems, data insertion (see `module` or `component` index files), and FE unit test integration.

I have it set to generate both **qUnit** and **Mocha** specs, for the sake of test-driving. 

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Since this isn't a public repo (yet), check it out and install by running `npm link` in the package's root.
- Run: `yo hero`
- Make a module: `yo hero:module`
	- Select `New Module`:
	> ![image](http://d.pr/i/HM6i.jpg) 
	- Fill out the details: 
	> ![image](http://d.pr/i/pKjc.jpg) 
	- Be filled with joy, your module is stubbed out and ready to go.
- Build the app with `grunt`

### Stubbing module methods

This generator can stub out methods, and make the basic tests to go with them for mocha and qUnit. Wow!

- Run `yo hero:module` again. This time select `Add Method`:
> ![image](http://d.pr/i/HtZY.jpg) 
- Fill out the method's basic information:
> ![image](http://d.pr/i/bblp.jpg)

You not only created the method, you created mocha/qUnit specs to go along with it! Run `grunt` again to see this in action in the test runner:
> ![image](http://d.pr/i/kp9V.jpg)

###Viewing the site

- Create a virtual server and point it at the `/build` directory.
	- Mocha tests: **http://the-site/tests/mocha/index.html**
	- qUnit tests: **http://the-site/tests/qUnit/index.html**


###Other things you can do:

- Make a component: `yo hero:component`


## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
