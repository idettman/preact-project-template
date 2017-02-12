'use strict';

import commonjs from 'rollup-plugin-commonjs';
import node from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';
import progress from 'rollup-plugin-progress';
import visualizer from 'rollup-plugin-visualizer';
import uglify from 'rollup-plugin-uglify';

const environmentMode = 'const process={' +
	'env:{' +
	'NODE_ENV:"development"' +
	'}' +
	'};';

export default {
	entry: 'src/app.js',
	intro: environmentMode,

	exports: 'none',
	format: 'iife',
	dest: 'bin/app-bundle.js',
	sourceMap: true,

	plugins: [
		node({
			jsnext: true,
			main: true,
			browser: true,
			module: true
		}),
		commonjs({
			include: [
				'node_modules/**'
			],
			ignoreGlobals: true,
			sourceMap: true,
		}),
		buble({
			jsx: 'h',
			exclude: "node_modules/!**",
			transforms: {
				modules: false
			}
		}),

		progress({
			clearLine: true
		}),

		(process.env.NODE_ENV === 'production' && uglify()),

		visualizer({
			filename: './bin/statistics.html',
			sourcemap: false
		})
	],
	external: ['fs', 'path', 'readline']
}