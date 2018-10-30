import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const tsconfigOverride = {
  compilerOptions: {
    module: 'es2015',
    sourceMap: true,
  },
};

export default {
  input: './src/main.ts',
  output: [{ file: pkg.browser, name: 'Analytics', format: 'umd', sourcemap: 'inline' }],
  plugins: [
    json(),
    resolve({ browser: true }),
    typescript({
      tsconfig: './tsconfig.json',
      tsconfigOverride,
    }),
    commonjs(),
    sourceMaps(),
  ],
};
