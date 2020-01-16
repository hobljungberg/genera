/**
 * Color
 *
 * A color component.
 */

import chroma from 'chroma';

import GeneraObject from './GeneraObject';


class Color extends GeneraObject {

    constructor(color = 0x000000) {
        super();

        this.value = color;
    }

    get rgba() {
        const [ r, g, b, a ] = this._color.rgba();
        return { r, g, b, a };
    }

    get value() {
        return this._color;
    }

    set value(supplied) {
        this._color = chroma(supplied);
    }

}


export default Color;
