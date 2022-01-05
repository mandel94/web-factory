// JavaScript functions for creating html snippets

const baseCodeByTags = require("./lookup")
const Tag = require("./tag")


/**
 * Class representing a Navbar
 */

class Navbar extends Tag {

    /**
     * Create a navbar
     * 
     * @param {Object}  htmlAttributes - HTML attributes
     *
     */

    constructor(htmlAttributes = {}) {
        super("nav");
        this.children = [];
        for (let a of Object.keys(htmlAttributes)) {
            this[a] = htmlAttributes[a];
        }
    };

    /**
     * Create a new child
     * @param {tag} string - HTML tag 
     */
    newChild(tag) {
        this.isParent = true;
        const child = new Child(this, arguments);
        this.children.push(child);
    }

    /**
     * Convert current navbar properties into a snippet of HTML code
     * 
     * @param {Tag} 
     */
    get baseCode() {
        let code = baseCodeByTags[this.tag];
        return (code);
    }
}

module.exports = Navbar;