/**
 * ElementSpace
 *
 * Used for rendering elements
 */

import Space from '~/metal/Space.js';


class ElementSpace extends Space {

    constructor(queryString, width, height) {
        super(width, height);

        this.parent = document.queryString(queryString);
        this.elements = [];
    }

}

export default ElementSpace;
