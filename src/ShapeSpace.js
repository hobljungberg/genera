/**
 * ShapeSpace
 *
 * A drawing space for shapes.
 */

import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';

import ElementSpace from './metal/ElementSpace';
import PointLight from './light/PointLight';


class ShapeSpace extends ElementSpace {

    constructor(queryString = null, width = 800, height = 600) {
        super(queryString, width, height);

        this.Camera = new PerspectiveCamera(45, this.aspect, .1, 1000);
        this.Light = new PointLight(0x5FEF9F, 1, 100);
        this.Renderer = new WebGLRenderer();
        this.Scene = new Scene();

        this.Light.setPosition(15, 15, -60);
        this.Light.addTo(this.Scene);
        this.Scene.add(this.Camera);
        this.Renderer.setSize(this.width, this.height);

        this.Container.appendChild(this.Renderer.domElement);
    }

    __render() {
        super.__render();
        this.Renderer.render(this.Scene, this.Camera);
    }

}


export default ShapeSpace;
