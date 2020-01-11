/**
 * Window
 *
 * A drawing space.
 */

import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';

import GeneraObject from './metal/GeneraObject';
import PointLight from './lighting/PointLight';


class Window extends GeneraObject {

    constructor(queryString = null, width = 800, height = 600) {
        if (queryString === null) {
            throw new Error("Window must have a query string to mount to an element") ;
        }

        super();

        this.width = width;
        this.height = height;

        this._behaviors = {
            draw: null,
            update: null,
        };

        this.Camera = new PerspectiveCamera(45, this.aspect, .1, 1000);
        this.Container = document.querySelector(queryString);
        this.Elements = [];
        this.Light = new PointLight(0x5FEF9F, 1, 100);
        this.Renderer = new WebGLRenderer();
        this.Scene = new Scene();

        this.__init();
    }

    __desireRender() {
        if (
            this._behaviors.draw !== null
            && this._behaviors.update !== null
        )  {
            this._behaviors.draw();
            this.__render();
        }
    }

    __init() {
        this._tick = 0;

        this.Light.setPosition(15, 15, -60);
        this.Light.addTo(this.Scene);
        this.Scene.add(this.Camera);
        this.Renderer.setSize(this.width, this.height);

        this.Container.appendChild(this.Renderer.domElement);
    }

    __render() {
        this.tick++;
        this._behaviors.update();
        this.Renderer.render(this.Scene, this.Camera);
        window.requestAnimationFrame(() => this.__render());
    }

    set draw(fn) {
        this._behaviors.draw = fn;
        this.__desireRender();
    }

    set update(fn) {
        this._behaviors.update = fn;
        this.__desireRender();
    }

    get aspect() {
        return this.width / this.height;
    }

}
