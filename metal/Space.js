/**
 * Space
 *
 * A place to render.
 */

import GeneraObject from './GeneraObject.js';


class Space extends GeneraObject {

    constructor(width = 800, height = 600) {
        super();

        this.width = width;
        this.height = height;

        this.tick = 0;

        this._behaviors = {
            draw: null,
            update: null,
        };
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

    __render() {
        this.tick++;
        this._behaviors.update();
        window.requestAnimationFrame(() => this.__render());
    }

    get aspect() {
        return this.width / this.height;
    }

    set draw(fn) {
        this._behaviors.draw = fn;
        this.__desireRender();
    }

    set update(fn) {
        this._behaviors.update = fn;
        this.__desireRender();
    }

}


export default Space;
