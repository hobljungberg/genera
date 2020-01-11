/**
 * Color
 *
 * A color component.
 */

import GeneraObject from './GeneraObject';


class Color extends GeneraObject {

    constructor(color = null) {
        super();

        this._normalize(color)
    }

    _normalize(color) {
        this.value = color || '#FFAA55';
    }

}


export default Color;
