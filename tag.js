const htmlProperties = require("./lookup")



/**
 * Build a class represent an HTML tag
 */

class Tag {
    static htmlProperties = htmlProperties;

    /**
     * 
     * @param {String} tag - The name of the tag
     */
    constructor(tag) {
        this.tag = tag;
    }
}

module.exports = Tag;