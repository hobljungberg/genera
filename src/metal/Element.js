/**
 * Element
 *
 * A renderable Object.
 */

import GeneraObject from './GeneraObject';


class Element from GeneraObject {

    constructor(x = 0, y = 0, z = 0) {
        super();

        this.x = x;
        this.y = y;
        this.z = z;
    }

}


export default Element;
