/**
 * Shape
 *
 * The base class from drawing meshes.
 */

import Element from '../metal/Element';


class Shape extends Element {

    constructor(x, y, z) {
        super(x, y, y);

        this.setPosition(x, y, z);
        this.setColor();
        this.setMesh();
    }

    addTo(scene) {
        if (this.mesh === null)  {
            throw new Error("Shape can't be added to scene; it needs a mesh.");
        }

        this.scene = scene;
        this.scene.add(this.mesh);
    }

    setColor(color = 0x000000) {
        this.color = color;
    }

    setMesh(mesh = null) {
        this.mesh = mesh;
    }

    setPosition(x = null, y = null, z = null) {
        this.x = x || this.x;
        this.y = y || this.y;
        this.z = z || this.z;

        if (this.mesh) {
            this.mesh.position.x = this.x;
            this.mesh.position.y = this.y;
            this.mesh.position.z = this.z;
        }
    }

}


export default Shape;
