/**
 * Genera
 *
 * Library for creating generative media in WebGL.
 */

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

const Genera = {
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

export default Genera;
export const { ...Genera };
