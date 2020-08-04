import resolve from '@rollup/plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/index.ts',
  output: [{ dir: './dist', sourcemap: 'inline' }],
  plugins: [
    resolve(),
    typescript(),
    sourceMaps(),
  ],
};
