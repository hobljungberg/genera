/**
 * Genera
 *
 * Library for creating generative media in WebGL.
 */

import pkg from './package';

// Spaces
import CanvasSpace from './spaces/CanvasSpace';
import ElementSpace from './spaces/ElementSpace';
import ShapeSpace from './spaces/ShapeSpace';
import ImageSpace from './spaces/ImageSpace';
import PixelSpace from './spaces/PixelSpace';

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

export const Combine = {
    Collection,
    Group,
};

export const Light = {
    ColorSpectrum,
    PointLight,
};

export const Shapes = {
    Shape,
    Circle,
};

export const Spaces = {
    ElementSpace,
    PixelSpace,
    CanvasSpace,
    ImageSpace,
    ShapeSpace,
};


const Genera = {
    version: pkg.version,

    Combine,
    Light,
    Shapes,
    Spaces,

    metal: {
        GeneraObject,
        Color,
        Element,
        Thing,
    },
};

export default Genera;
