/**
 * Element
 *
 * A renderable object.
 */

import GeneraObject from './GeneraObject.js';


class Element extends GeneraObject {

    constructor(x = 0, y = 0, z = 0) {
        super();

        this.setPosition(x, y, z);
        this.scenes = new Set();
    }

    addTo(scene) {
        this.scenes.add(scene);
    }

    setPosition(x, y, z) {
        this.x = x || this.x;
        this.y = y || this.y;
        this.z = z || this.z;
    }

}


export default Element;
