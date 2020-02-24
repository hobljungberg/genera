/**
 * Circle
 *
 * A Circle Shape
 */

import { CircleGeometry, Mesh, MeshPhongMaterial } from 'three';

import Shape from './Shape';


class Circle extends Shape {

    constructor(x = 1, y = 1, z = -20, r = 1, color) {
        super(x, y, z);

        this.setColor(color);
        this.radius = r;

        const geom = new CircleGeometry(r, 50);
        const mat = new MeshPhongMaterial(this.color);

        this.setMesh(new Mesh(geom, mat));
        this.setPosition(x, y, z);
    }


}


export default Circle;
