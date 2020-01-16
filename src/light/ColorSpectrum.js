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
        console.log(decimal.toString(16));
    }

    next() {
        return this.color(++this.decimal);
    }

    previous() {
        return this.color(--this.decimal);
    }

}
