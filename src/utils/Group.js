/**
 * Group
 *
 * Used for grouping Elements together.
 */

import Element from '../metal/Element';


class Group extends Element {

    constructor(elements = [], x = null, y = null, z = null) {
        super(x, y, z);

        this.Elements = elements;
    }

}


export default Group;
