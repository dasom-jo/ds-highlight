import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:6006', // Storybook 서버 주소
    supportFile: 'cypress/support/e2e.ts', // 지원 파일 경로
  },
});
