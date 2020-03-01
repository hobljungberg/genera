/**
 * ColorSpectrum
 *
 * A class that generates colors according to a set of
 * rules to permute the RGB field.
 */

import GeneraObject from '../metal/GeneraObject.js';


class ColorSpectrum extends GeneraObject {

    constructor(permutation = "RRGGBB", startPosition = 0) {
        super();

        this.decimal = startPosition;
        this.permutation = permutation;

        this.length = Math.pow(16, 6);
    }

    color(decimal) {
        this.decimal = decimal;

        const hex = Array.from(decimal.toString(16).padStart(6, '0'));

        return Array.prototype.reduce.call(this.permutation, (
            (permuted, chan) => {
                return permuted.replace(chan, hex.shift())
            }
        ), "RRGGBB");
    }

    next() {
        if (this.decimal === this.length) {
            this.decimal = -1;
        }

        return this.color(++this.decimal);
    }

    previous() {
        if (this.decimal === 0) {
            this.decimal = this.length + 1;
        }

        return this.color(--this.decimal);
    }

}


export default ColorSpectrum;
