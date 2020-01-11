/**
 * Shape
 *
 * The base class from drawing meshes.
 */

import Thing from '../metal/Thing';


class Shape extends Thing {

    constructor(x, y, z) {
        super(x, y, y);

        this.setColor();
        this.setMesh();
    }

    addTo(scene) {
        if (this.thing === null)  {
            throw new Error("Shape can't be added to scene; it needs a mesh.");
        }

        super.addTo(scene);
    }

    setColor(color = 0x000000) {
        this.color = color;
    }

    setMesh(mesh = null) {
        this.thing = mesh;
    }

    setPosition(x = null, y = null, z = null) {
        super.setPosition(x, y, z);

        if (this.thing) {
            this.thing.position.x = this.x;
            this.thing.position.y = this.y;
            this.thing.position.z = this.z;
        }
    }

}


export default Shape;
