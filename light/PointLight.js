/**
 * PointLight
 *
 * A point light Element.
 */

import { PointLight as PointLight3 } from 'three';

import Thing from '../metal/Thing.js';


class PointLight extends Thing {

    constructor(color = 0xffffff, intensity = 1, distance = 0, decay = 1) {
        super();

        this.thing = new PointLight3(color, intensity, distance, decay);
    }

    setPosition(x, y, z) {
        super.setPosition(x, y, z);
        this.thing.position.set(x, y, z);
    }

}


export default PointLight;
