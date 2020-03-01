// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"package.json":[function(require,module,exports) {
module.exports = {
  "name": "genera",
  "version": "0.1.0",
  "description": "Generative Art & Design Library",
  "main": "dist/Genera.js",
  "unpkg": "dist/Genera.min.js",
  "repository": "https://github.com/hobljungberg/genera",
  "author": "Hob Ljungberg <hob@hobljungberg.com>",
  "license": "MIT",
  "private": false,
  "type": "module",
  "scripts": {
    "build:node": "npx parcel build Genera.js --target node",
    "build:web": "npx parcel build Genera.js",
    "build": "yarn run build:node & yarn run build:web",
    "start": "npx parcel watch Genera.js --target node"
  },
  "dependencies": {
    "chroma-js": "^2.1.0",
    "jimp": "^0.9.3",
    "three": "^0.112.1",
    "uuid": "^3.3.3"
  },
  "devDependencies": {
    "@babel/core": "^7.6.4",
    "@babel/preset-env": "^7.6.3",
    "parcel-bundler": "^1.12.4"
  }
};
},{}],"metal/GeneraObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _v = _interopRequireDefault(require("uuid/v4.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * GeneraObject
 *
 * Base object for Genera
 */
class GeneraObject {
  constructor() {
    this._id = (0, _v.default)();
  }

}

var _default = GeneraObject;
exports.default = _default;
},{}],"metal/Color.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _chromaJs = _interopRequireDefault(require("chroma-js"));

var _GeneraObject = _interopRequireDefault(require("./GeneraObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Color
 *
 * A color component.
 */
class Color extends _GeneraObject.default {
  constructor(color = 0x000000) {
    super();
    this.value = color;
    this.__decoded = {};
  }

  get rgba() {
    if (!('rgba' in this.__decoded)) {
      const [r, g, b, a] = this._color.rgba();

      this.__decoded['rgba'] = {
        r,
        g,
        b,
        a
      };
    }

    return this.__decoded['rgba'];
  }

  get hsl() {
    if (!('hsl' in this.__decoded)) {
      const [h, s, l] = this._color.hsl();

      this.__decoded['hsl'] = {
        h,
        s,
        l
      };
    }

    return this.__decoded['hsl'];
  }

  get value() {
    return this._color;
  }

  set value(supplied) {
    this._color = (0, _chromaJs.default)(supplied);
  }

}

var _default = Color;
exports.default = _default;
},{"./GeneraObject.js":"metal/GeneraObject.js"}],"metal/Space.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GeneraObject = _interopRequireDefault(require("./GeneraObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Space
 *
 * A place to render.
 */
class Space extends _GeneraObject.default {
  constructor(width = 800, height = 600) {
    super();
    this.width = width;
    this.height = height;
    this.tick = 0;
    this._behaviors = {
      draw: null,
      update: null
    };
  }

  __desireRender() {
    if (this._behaviors.draw !== null && this._behaviors.update !== null) {
      this._behaviors.draw();

      this.__render();
    }
  }

  __render() {
    this.tick++;

    this._behaviors.update();

    window.requestAnimationFrame(() => this.__render());
  }

  get aspect() {
    return this.width / this.height;
  }

  set draw(fn) {
    this._behaviors.draw = fn;

    this.__desireRender();
  }

  set update(fn) {
    this._behaviors.update = fn;

    this.__desireRender();
  }

}

var _default = Space;
exports.default = _default;
},{"./GeneraObject.js":"metal/GeneraObject.js"}],"spaces/PixelSpace.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Color = _interopRequireDefault(require("../metal/Color.js"));

var _Space = _interopRequireDefault(require("../metal/Space.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * PixelSpace
 *
 * Color by pixel.
 */
class PixelSpace extends _Space.default {
  constructor(width, height) {
    super(width, height);
    this._pixels = [[]];
  }

  getPixel(x = 0, y = 0) {
    return this._pixels[x] && this._pixels[x][y] ? this._pixels[x][y] : undefined;
  }

  setColumn(col = 0, color) {
    for (let row = 0; row < this.height; row++) {
      this.setPixel(col, row, color);
    }
  }

  setPixel(x = 0, y = 0, c = 0x000000) {
    if (!this._pixels[x]) {
      this._pixels[x] = [];
    }

    this._pixels[x][y] = c;
  }

  setRow(row = 0, color) {
    for (let col = 0; col < this.width; col++) {
      this.setPixel(col, row, color);
    }
  }

}

var _default = PixelSpace;
exports.default = _default;
},{"../metal/Color.js":"metal/Color.js","../metal/Space.js":"metal/Space.js"}],"spaces/CanvasSpace.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Color = _interopRequireDefault(require("../metal/Color.js"));

var _PixelSpace = _interopRequireDefault(require("./PixelSpace.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * CanvasSpace
 *
 * Used for rendering to a Canvas element.
 */
class CanvasSpace extends _PixelSpace.default {
  constructor(queryString, width, height) {
    super(width, height);
    this.parent = document.querySelector(queryString);
    this._canvas = document.createElement('canvas');
    this._context = this._canvas.getContext('2d');
    this._pixel = this._context.createImageData(1, 1);

    this._canvas.setAttribute('width', this.width);

    this._canvas.setAttribute('height', this.height);

    this.parent.appendChild(this._canvas);
  }

  setPixel(x = 0, y = 0, c = 0x000000) {
    super.setPixel(x, y, c);
    const {
      r,
      g,
      b,
      a
    } = new _Color.default(c).rgba;
    this._context.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;

    this._context.fillRect(x, y, 1, 1);
  }

}

var _default = CanvasSpace;
exports.default = _default;
},{"../metal/Color.js":"metal/Color.js","./PixelSpace.js":"spaces/PixelSpace.js"}],"spaces/ElementSpace.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Space = _interopRequireDefault(require("~/metal/Space.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ElementSpace
 *
 * Used for rendering elements
 */
class ElementSpace extends _Space.default {
  constructor(queryString, width, height) {
    super(width, height);
    this.parent = document.queryString(queryString);
    this.elements = [];
  }

}

var _default = ElementSpace;
exports.default = _default;
},{"~/metal/Space.js":"metal/Space.js"}],"metal/Element.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GeneraObject = _interopRequireDefault(require("./GeneraObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Element
 *
 * A renderable object.
 */
class Element extends _GeneraObject.default {
  constructor(x = 0, y = 0, z = 0) {
    super();
    this.setPosition(x, y, z);
    this.scenes = new Set();
  }

  addTo(scene) {
    this.scenes.add(scene);
  }

  setPosition(x, y, z) {
    this.x = x || this.x;
    this.y = y || this.y;
    this.z = z || this.z;
  }

}

var _default = Element;
exports.default = _default;
},{"./GeneraObject.js":"metal/GeneraObject.js"}],"metal/Thing.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Element = _interopRequireDefault(require("./Element.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Thing
 *
 * An Element that isn't the thing itself.
 */
class Thing extends _Element.default {
  constructor(x, y, z) {
    super(x, y, z);
    this.thing = null;
  }

  addTo(scene) {
    super.addTo(scene);

    if (this.thing) {
      this.scene.add(this.thing);
    }
  }

}

var _default = Thing;
exports.default = _default;
},{"./Element.js":"metal/Element.js"}],"light/PointLight.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _three = require("three");

var _Thing = _interopRequireDefault(require("../metal/Thing.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * PointLight
 *
 * A point light Element.
 */
class PointLight extends _Thing.default {
  constructor(color = 0xffffff, intensity = 1, distance = 0, decay = 1) {
    super();
    this.thing = new _three.PointLight(color, intensity, distance, decay);
  }

  setPosition(x, y, z) {
    super.setPosition(x, y, z);
    this.thing.position.set(x, y, z);
  }

}

var _default = PointLight;
exports.default = _default;
},{"../metal/Thing.js":"metal/Thing.js"}],"spaces/ShapeSpace.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _three = require("three");

var _ElementSpace = _interopRequireDefault(require("./ElementSpace.js"));

var _PointLight = _interopRequireDefault(require("../light/PointLight.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ShapeSpace
 *
 * A drawing space for shapes.
 */
class ShapeSpace extends _ElementSpace.default {
  constructor(queryString = null, width = 800, height = 600) {
    super(queryString, width, height);
    this.Camera = new _three.PerspectiveCamera(45, this.aspect, .1, 1000);
    this.Light = new _PointLight.default(0x5FEF9F, 1, 100);
    this.Renderer = new _three.WebGLRenderer();
    this.Scene = new _three.Scene();
    this.Light.setPosition(15, 15, -60);
    this.Light.addTo(this.Scene);
    this.Scene.add(this.Camera);
    this.Renderer.setSize(this.width, this.height);
    this.parent.appendChild(this.Renderer.domElement);
  }

  __render() {
    super.__render();

    this.Renderer.render(this.Scene, this.Camera);
  }

}

var _default = ShapeSpace;
exports.default = _default;
},{"./ElementSpace.js":"spaces/ElementSpace.js","../light/PointLight.js":"light/PointLight.js"}],"spaces/ImageSpace.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jimp = _interopRequireDefault(require("jimp"));

var _PixelSpace = _interopRequireDefault(require("./PixelSpace.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ImageSpace
 *
 * A space for rendering onto images.
 */
class ImageSpace extends _PixelSpace.default {
  constructor(width, height) {
    super(width, height);
    this.image = new _jimp.default(width, height, 0x000000);
  }

  setPixel(x, y, c) {
    super.setPixel(x, y, c);
    this.image.setPixelColor(c, x, y);
  }

  getPixel(x, y) {
    return super.getPixel(x, y, c);
  }

}

var _default = ImageSpace;
exports.default = _default;
},{"./PixelSpace.js":"spaces/PixelSpace.js"}],"combine/Collection.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GeneraObject = _interopRequireDefault(require("../metal/GeneraObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Collection
 *
 * Used for encapsulating sets of objects.
 */
class Collection extends _GeneraObject.default {
  constructor(entries = []) {
    super();
    this.entries = Array.from(entries);
  }

  combine(min = 1) {
    const combine = function (a, min) {
      var fn = function (n, src, got, all) {
        if (n == 0) {
          if (got.length > 0) {
            all[all.length] = got;
          }

          return;
        }

        for (var j = 0; j < src.length; j++) {
          fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }

        return;
      };

      var all = [];

      for (var i = min; i < a.length; i++) {
        fn(i, a, [], all);
      }

      all.push(a);
      return all;
    };

    return combine(this.entries, min);
  }

  permute(memSafe = true) {
    // 13! = 6,227,020,800
    if (memSafe && this.entries.length >= 13) {
      throw new Error('too many entries to permute');
    }

    function permute(arr) {
      if (arr.length === 1) {
        return [arr[0]];
      }

      const permutations = [];
      arr.forEach((elem, i) => {
        const disjoint = arr.slice(0, i).concat(arr.slice(i + 1, arr.length));
        permute(disjoint).forEach(permutation => {
          permutations.push(elem.concat(permutation));
        });
      });
      return permutations;
    }

    return Array.from(new Set(permute(this.entries)));
  }

}

var _default = Collection;
exports.default = _default;
},{"../metal/GeneraObject.js":"metal/GeneraObject.js"}],"combine/Group.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Element = _interopRequireDefault(require("../metal/Element.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Group
 *
 * Used for grouping Elements together.
 */
class Group extends _Element.default {
  constructor(elements = [], x = null, y = null, z = null) {
    super(x, y, z);
    this.Elements = elements;
  }

}

var _default = Group;
exports.default = _default;
},{"../metal/Element.js":"metal/Element.js"}],"light/ColorSpectrum.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GeneraObject = _interopRequireDefault(require("../metal/GeneraObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ColorSpectrum
 *
 * A class that generates colors according to a set of
 * rules to permute the RGB field.
 */
class ColorSpectrum extends _GeneraObject.default {
  constructor(permutation = "RRGGBB", startPosition = 0) {
    super();
    this.decimal = startPosition;
    this.permutation = permutation;
    this.length = Math.pow(16, 6);
  }

  color(decimal) {
    this.decimal = decimal;
    const hex = Array.from(decimal.toString(16).padStart(6, '0'));
    return Array.prototype.reduce.call(this.permutation, (permuted, chan) => {
      return permuted.replace(chan, hex.shift());
    }, "RRGGBB");
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

var _default = ColorSpectrum;
exports.default = _default;
},{"../metal/GeneraObject.js":"metal/GeneraObject.js"}],"shapes/Shape.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Thing = _interopRequireDefault(require("../metal/Thing.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Shape
 *
 * The base class from drawing meshes.
 */
class Shape extends _Thing.default {
  constructor(x, y, z) {
    super(x, y, z);
    this.setColor();
    this.setMesh();
  }

  addTo(scene) {
    if (this.thing === null) {
      throw new Error("Shape can't be added to scene; it needs a mesh.");
    }

    super.addTo(scene);
  }

  setColor(color = 0x000000) {
    this.color = color;
  }

  setMesh(mesh = null) {
    this.thing = mesh;
  }

  setPosition(x = null, y = null, z = null) {
    super.setPosition(x, y, z);

    if (this.thing) {
      this.thing.position.x = this.x;
      this.thing.position.y = this.y;
      this.thing.position.z = this.z;
    }
  }

}

var _default = Shape;
exports.default = _default;
},{"../metal/Thing.js":"metal/Thing.js"}],"shapes/Circle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _three = require("three");

var _Shape = _interopRequireDefault(require("./Shape.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Circle
 *
 * A Circle Shape
 */
class Circle extends _Shape.default {
  constructor(x = 1, y = 1, z = -20, r = 1, color) {
    super(x, y, z);
    this.setColor(color);
    this.radius = r;
    const geom = new _three.CircleGeometry(r, 50);
    const mat = new _three.MeshPhongMaterial(this.color);
    this.setMesh(new _three.Mesh(geom, mat));
    this.setPosition(x, y, z);
  }

}

var _default = Circle;
exports.default = _default;
},{"./Shape.js":"shapes/Shape.js"}],"Genera.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Spaces = exports.Shapes = exports.Light = exports.Combine = void 0;

var _package = _interopRequireDefault(require("./package"));

var _CanvasSpace = _interopRequireDefault(require("./spaces/CanvasSpace"));

var _ElementSpace = _interopRequireDefault(require("./spaces/ElementSpace"));

var _ShapeSpace = _interopRequireDefault(require("./spaces/ShapeSpace"));

var _ImageSpace = _interopRequireDefault(require("./spaces/ImageSpace"));

var _PixelSpace = _interopRequireDefault(require("./spaces/PixelSpace"));

var _Collection = _interopRequireDefault(require("./combine/Collection"));

var _Group = _interopRequireDefault(require("./combine/Group"));

var _ColorSpectrum = _interopRequireDefault(require("./light/ColorSpectrum"));

var _PointLight = _interopRequireDefault(require("./light/PointLight"));

var _GeneraObject = _interopRequireDefault(require("./metal/GeneraObject"));

var _Color = _interopRequireDefault(require("./metal/Color"));

var _Element = _interopRequireDefault(require("./metal/Element"));

var _Thing = _interopRequireDefault(require("./metal/Thing"));

var _Shape = _interopRequireDefault(require("./shapes/Shape"));

var _Circle = _interopRequireDefault(require("./shapes/Circle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Genera
 *
 * Library for creating generative media in WebGL.
 */
// Spaces
// Combinations
// Light
// Metal
// Shapes

/**
 * Namespaces
 */
const Combine = {
  Collection: _Collection.default,
  Group: _Group.default
};
exports.Combine = Combine;
const Light = {
  ColorSpectrum: _ColorSpectrum.default,
  PointLight: _PointLight.default
};
exports.Light = Light;
const Shapes = {
  Shape: _Shape.default,
  Circle: _Circle.default
};
exports.Shapes = Shapes;
const Spaces = {
  ElementSpace: _ElementSpace.default,
  PixelSpace: _PixelSpace.default,
  CanvasSpace: _CanvasSpace.default,
  ImageSpace: _ImageSpace.default,
  ShapeSpace: _ShapeSpace.default
};
exports.Spaces = Spaces;
const Genera = {
  version: _package.default.version,
  Combine,
  Light,
  Shapes,
  Spaces,
  metal: {
    GeneraObject: _GeneraObject.default,
    Color: _Color.default,
    Element: _Element.default,
    Thing: _Thing.default
  }
};
var _default = Genera;
exports.default = _default;
},{"./package":"package.json","./spaces/CanvasSpace":"spaces/CanvasSpace.js","./spaces/ElementSpace":"spaces/ElementSpace.js","./spaces/ShapeSpace":"spaces/ShapeSpace.js","./spaces/ImageSpace":"spaces/ImageSpace.js","./spaces/PixelSpace":"spaces/PixelSpace.js","./combine/Collection":"combine/Collection.js","./combine/Group":"combine/Group.js","./light/ColorSpectrum":"light/ColorSpectrum.js","./light/PointLight":"light/PointLight.js","./metal/GeneraObject":"metal/GeneraObject.js","./metal/Color":"metal/Color.js","./metal/Element":"metal/Element.js","./metal/Thing":"metal/Thing.js","./shapes/Shape":"shapes/Shape.js","./shapes/Circle":"shapes/Circle.js"}]},{},["Genera.js"], null)
//# sourceMappingURL=/Genera.js.map