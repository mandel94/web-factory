# web-factory
:bulb: The idea is to use JavaScript to produce parameterized html snippets ready to be copy-pasted in a html file. 
This would allow to use html in a programmatic way, adding to:
* the *reproducibility* of web design...
* and its *flexibility*, thanks to JavaScript functions and their parameters;

Moreover, by putting constrainsts on some parameters, we could easily get standardized code snippets.

the final product will be plain html code.   


### Fake prototype code sample
```javascript 
navbar = new Navbar();
ul = new UnorderList();
il = new ItemList();
css = new CSS("stylesheet.css"); # reads from a file

/* @example
navbar.class({}).id({}).style({}).child({}).child({}).code({});
{} --> is a programmable entity */

// Set navbar instance 
navbar.class("bg-blue").id("home-nav").style(css.sheet).child(ul).code();

// Modify ul instance
ul.child(il);
ul.class("black-font");

// Since the instance of ul is 'tied' to the navbar, 
// each change would reflect on the code being returned.
navbar.code();

// Set custom attribute
navbar.setAttribute();
``` 
