/**
 * ElementSpace
 *
 * Used for rendering elements
 */

import Space from '../metal/Space';


class ElementSpace extends Space {

    constructor(queryString, width, height) {
        super(queryString, width, height);

        this.Elements = [];
    }

}
