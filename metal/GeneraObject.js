/**
 * GeneraObject
 *
 * Base object for Genera
 */

import uuidv4 from 'uuid/v4.js';


class GeneraObject {

    constructor() {
        this._id = uuidv4();
    }

}


export default GeneraObject;
