/**
 * ImageSpace
 *
 * A space for rendering onto images.
 */

import Jimp from 'jimp';

import Space from './PixelSpace';


class ImageSpace extends PixelSpace {

    constructor(queryString, width, height) {
        super(queryString, width, height);

        new Jimp(width, height, 0x000000, (err, image) => {
            if (err) {
                throw new Error(err);
            }

            this.image = image;
        });
    }

}

