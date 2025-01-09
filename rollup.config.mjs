import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/components/TextLine.tsx', // 컴포넌트 진입점
  "type": "module",
  output: [
    {
      file: 'dist/index.js', // 번들 파일
      format: 'cjs', // CommonJS 모듈
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js', // ESM 모듈
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // Node.js 모듈 해석
    commonjs(), // CommonJS 모듈 변환
    typescript({ tsconfig: './tsconfig.json' }), // TypeScript 지원
    terser(), // 코드 압축
  ],
  external: ['react', 'react-dom'], // 외부 의존성
};
