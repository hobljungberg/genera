/**
 * ColorSpectrum
 *
 * A class that generates colors according to a set of
 * rules to permute the RGB field.
 */

import GeneraObject from '../metal/GeneraObject';


class ColorSpectrum extends GeneraObject {

    constructor(permutation = "RRGGBB", startPosition = 0) {
        super();

        this.decimal = startPosition;
        this.permutation = permutation;
    }

    color(decimal) {
        const hex = Array.from(decimal.toString(16).padStart(6, '0'));

        return Array.prototype.reduce.call(this.permutation, (
            (permuted, chan) => {
                console.log(permuted, chan);
                return permuted.replace(chan, hex.shift())
            }
        ), "RRGGBB");
    }

    next() {
        return this.color(++this.decimal);
    }

    previous() {
        return this.color(--this.decimal);
    }

}


export default ColorSpectrum;
