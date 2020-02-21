/**
 * CanvasSpace
 *
 * Used for rendering to a Canvas element.
 */

import PixelSpace from './PixelSpace';


class CanvasSpace extends PixelSpace {

    constructor(queryString, width, height) {
        super(queryString, width, height);

        this._canvas = document.createElement('canvas');
        this._context = this._canvas.getContext('2d');
        this._pixel = this._context.createImageData(1,1);

        this._canvas.setAttribute('width', this.width);
        this._canvas.setAttribute('height', this.height);
        this.Container.appendChild(this._canvas);
    }

    setPixel(x = 0, y = 0, c = 0x000000) {
        super.setPixel(x, y, c);

        const { r, g, b, a } = (new Color(c)).rgba;

        this._context.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
        this._context.fillRect(x, y, 1, 1);
    }

}
