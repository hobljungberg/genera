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

        this._light = new THREE.PointLight(color, intensity, distance, decay);
    }

}


export default PointLight;
