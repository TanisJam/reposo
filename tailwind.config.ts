import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
        bona_nova: ['Bona Nova SC', 'serif'],
        nanum_gothic: ['Nanum Gothic Coding', 'monospace'],
        junge_regular: ['Junge', 'serif'],
      },
      colors: {
        ember: {
          50: '#fff8eb',
          100: '#ffeac6',
          200: '#ffd488',
          300: '#ffb84a',
          400: '#ff9c20',
          500: '#f57b07',
          600: '#d95e02',
          700: '#a8420a',
          800: '#7a2f0d',
          900: '#5c2410',
        },
        wood: {
          950: '#0d0a07',
          900: '#14100b',
          800: '#1d160f',
          700: '#2a1f15',
          600: '#3d2c1a',
          500: '#5a4226',
        },
        parchment: {
          50: '#f7f4ee',
          100: '#f1eee4',
          200: '#e7dec5',
          300: '#ddc6b3',
          400: '#c2a37d',
        },
      },
      keyframes: {
        ember: {
          '0%': {
            transform: 'translate3d(0, 0, 0) scale(0.6)',
            opacity: '0',
          },
          '15%': { opacity: '0.9' },
          '85%': { opacity: '0.4' },
          '100%': {
            transform: 'translate3d(var(--ember-drift, 12px), -120vh, 0) scale(1)',
            opacity: '0',
          },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '45%': { opacity: '0.85' },
          '55%': { opacity: '0.95' },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow:
              '0 0 0 1px rgba(255, 184, 74, 0.15), 0 0 60px -10px rgba(255, 156, 32, 0.35)',
          },
          '50%': {
            boxShadow:
              '0 0 0 1px rgba(255, 184, 74, 0.3), 0 0 90px -8px rgba(255, 156, 32, 0.55)',
          },
        },
        floatIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        ember: 'ember linear infinite',
        flicker: 'flicker 4s ease-in-out infinite',
        glowPulse: 'glowPulse 5s ease-in-out infinite',
        floatIn: 'floatIn 0.8s ease-out forwards',
      },
    },
  },
  daisyui: {
    themes: [
      {
        cuervo: {
          primary: '#ff9c20',
          secondary: '#d1495b',
          accent: '#ffb84a',
          neutral: '#0d0a07',
          'base-100': '#14100b',
          'base-200': '#1d160f',
          'base-300': '#2a1f15',
          info: '#85c1dc',
          success: '#a6d189',
          warning: '#e5c890',
          error: '#e78284',
        },
      },
    ],
  },
  plugins: [daisyui],
};
export default config;
