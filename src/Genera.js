/**
 * Genera
 *
 * Library for creating generative media in WebGL.
 */

import pkg from '../package';

// Spaces
import PixelSpace from './spaces/PixelSpace';
import ShapeSpace from './spaces/ShapeSpace';
import CanvasSpace from './spaces/CanvasSpace';
import ImageSpace from './spaces/ImageSpace';

// Combinations
import Collection from './combine/Collection';
import Group from './combine/Group';

// Light
import ColorSpectrum from './light/ColorSpectrum';
import PointLight from './light/PointLight';

// Metal
import GeneraObject from './metal/GeneraObject';
import Color from './metal/Color';
import Element from './metal/Element';
import Thing from './metal/Thing';

// Shapes
import Shape from './shapes/Shape';
import Circle from './shapes/Circle';


/**
 * Namespaces
 */

export default {
    version: pkg.version,

    Spaces: {
        CanvasSpace,
        ImageSpace,
        PixelSpace,
        ShapeSpace,
    },

    Light: {
        ColorSpectrum,
        PointLight,
    },

    Shapes: {
        Shape,
        Circle,
    },

    Combinations: {
        Collection,
        Group,
    },

    _metal: {
        GeneraObject,
        Color,
        Element,
        Thing,
    },
};
