/**
 * PointLight
 *
 * A point light Element.
 */

import THREE from 'three';

import Element from '../metal/Element';


class PointLight extends Element {

    constructor(color = 0xffffff, intensity = 1, distance = 0, decay = 1) {
        super();

        this.thing = new THREE.PointLight(color, intensity, distance, decay);
    }

    setPosition(x, y, z) {
        super.setPosition(x, y, z);
        this.thing.position.set(x, y, z);
    }

}


export default PointLight;