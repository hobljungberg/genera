/**
 * Color
 *
 * A color component.
 */

import chroma from 'chroma-js';

import GeneraObject from './GeneraObject.js';


class Color extends GeneraObject {

    constructor(color = 0x000000) {
        super();

        this.value = color;
        this.__decoded = {};
    }

    get rgba() {
        if (!('rgba' in this.__decoded)) {
            const [ r, g, b, a ] = this._color.rgba();
            this.__decoded['rgba'] = { r, g, b, a };
        }

        return this.__decoded['rgba'];
    }

    get hsl() {
        if (!('hsl' in this.__decoded)) {
            const [ h, s, l ] = this._color.hsl();
            this.__decoded['hsl'] = { h, s, l };
        }

        return this.__decoded['hsl'];
    }

    get value() {
        return this._color;
    }

    set value(supplied) {
        this._color = chroma(supplied);
    }

}


export default Color;
