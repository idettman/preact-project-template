'use strict';

import commonjs from 'rollup-plugin-commonjs';
import node from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';
//import progress from 'rollup-plugin-progress';
//import inject from 'rollup-plugin-inject';
//import cleanup from 'rollup-plugin-cleanup';
//import uglify from 'rollup-plugin-uglify';

const environmentMode = 'const process={' +
	'env:{' +
		'NODE_ENV:"development"' +
	'}' +
'};';

export default {

	exports: 'none',

	format: 'iife',

	entry: 'src/app.js',

	dest: 'bin/app-bundle.js',

	intro: environmentMode,

	plugins: [
		node({
			jsnext: true,
			main: true,
			browser: true
		}),
		commonjs({
			include: [
				'node_modules/fbjs/**',
				'node_modules/object-assign/**',
				'node_modules/react/**',
				'node_modules/react-dom/**'
			],
			sourceMap: false,
		}),
		buble({
			exclude: "node_modules/**",
			transforms: {
				modules: false
			}
		})

		/*,
		progress({
			clearLine: true
		})*/

		/*
		Dependency Injection
		https://github.com/rollup/rollup-plugin-inject

		inject({
		 	include: '* * / *.js',
			exclude: 'node_modules/**',
			modules: {}
		})
		*/

		/*
		Minify
		(process.env.NODE_ENV === 'production' && uglify()),
		*/

		/*
		Remove comments, trailing spaces, etc
		https://github.com/aMarCruz/rollup-plugin-cleanup
		cleanup()
		 */
	]
}