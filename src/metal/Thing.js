/**
 * Thing
 *
 * An Element that isn't the thing itself.
 */

import Element from './Element';


class Thing extends Element {

    constructor(x, y, z) {
        super(x, y, z);

        this.thing = null;
    }

    addTo(scene) {
        super.addTo(scene);

        if (this.thing) {
            this.scene.add(this.thing);
        }
    }

}


export default Thing;
