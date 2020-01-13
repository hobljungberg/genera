/**
 * Genera
 *
 * Library for creating generative media in WebGL.
 */

import pkg from '../package';

// Top Level
import Window from './Window';

// Metal
import GeneraObject from './metal/GeneraObject';
import Color from './metal/Color';
import Element from './metal/Element';
import Thing from './metal/Thing';

// Shapes
import Shape from './shapes/Shape';
import Circle from './shapes/Circle';

// Utils
import Group from './utils/Group';


/**
 * Namespaces
 */

export default {
    version: pkg.version,

    Window,

    Shapes: {
        Shape,
        Circle,
    },

    Utils: {
        Group,
    },

    _metal: {
        GeneraObject,
        Color,
        Element,
        Thing,
    },
};

export { Window };
