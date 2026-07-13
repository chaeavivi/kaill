import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // 딥네이비 기반 브랜드 스케일 (에디토리얼·차분·권위감) — 디자인 샘플 기준
        navy: {
          50: '#f5f7fa',
          100: '#eceff3',
          200: '#e1e7ef',
          300: '#c3d2e5',
          400: '#8da2bc',
          500: '#5c6b7e',
          600: '#3c4a5c',
          700: '#22354f',
          800: '#0f1e33',
          900: '#0d1b2a',
          950: '#0b1624',
        },
        // 다크 배경 위 경계선 색
        hairline: '#1b2e45',
        // 포인트 틸(teal-green) 1종 — 차분·품격 (디자인 샘플 기준)
        accent: {
          light: '#6fd0c6',
          DEFAULT: '#3e9b94',
          dark: '#2f7d77',
          ink: '#04241f', // 틸 버튼 위 텍스트
        },
      },
      fontFamily: {
        sans: [
          'Pretendard',
          'Pretendard Variable',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '1120px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(10, 23, 48, 0.08), 0 8px 24px rgba(10, 23, 48, 0.06)',
        'card-hover': '0 4px 12px rgba(10, 23, 48, 0.12), 0 16px 40px rgba(10, 23, 48, 0.10)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
