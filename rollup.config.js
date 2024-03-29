import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/index.ts',
  output: {
    file: './dist/bonboarding.min.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [typescript(), terser()],
};
