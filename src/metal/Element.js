/**
 * Element
 *
 * A renderable Object.
 */

import GeneraObject from './GeneraObject';


class Element from GeneraObject {

    constructor(x = 0, y = 0, z = 0) {
        super();

        this.setPosition(x, y, z);
    }

    setPosition(x, y, z) {
        this.x = x || this.x;
        this.y = y || this.y;
        this.z = z || this.z;
    }

}


export default Element;
