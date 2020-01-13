/**
 * Color
 *
 * A color component.
 */

import GeneraObject from './GeneraObject';


class Color extends GeneraObject {

    constructor(color = null) {
        super();

        this.value = color;
    }

    get value() {
        return this._color;
    }

    set value(supplied) {

    }

}


export default Color;
