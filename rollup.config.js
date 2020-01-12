/**
 * Rollup Config
 *
 * Development: `yarn run start`
 * Production: `yarn run build`
 */


import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';

import pkg from './package.json';


const pre = [
    resolve({ preferBuiltins: true }),
    commonjs(),
    globals(),
    builtins(),
];

const post = [
    babel({ exclude: 'node_modules/**' }),
    json(),
];

const build = {
    input: 'src/Genera.js',
    external: pkg.dependencies,
    plugins: [
        ...pre,
        ...post,
    ],
};


export default [

    // CommonJS
    {
        ...build,
        output: {
            file: 'dist/genera.js',
            format: 'cjs',
            indent: false,
        },
    },

    // ES6 modules
    {
        ...build,
        output: {
            file: 'dist/genera.es.js',
            format: 'es',
            indent: false
        },
    },

    // Browsers
    {
        ...build,
        output: {
            file: './dist/genera.min.js',
            format: 'iife',
            name: 'Genera',
            indent: false,
            sourcemap: true,
        },
        plugins: [
            ...pre,
            replace({
                VERSION: `Genera.version = '${pkg.version}'`,
            }),
            ...post,
            terser(),
        ]
    },

];
