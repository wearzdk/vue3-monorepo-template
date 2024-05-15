import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss';
import type { PresetThemeOptions } from 'unocss-preset-theme';
import presetTheme from 'unocss-preset-theme';

const themes: PresetThemeOptions<any> = {
  theme: {
    dark: {
      colors: {
        canvas: '#252525',
        text1: '#FFFFFF',
        text2: '#BDBDBD',
        border: '#3A3A3A',
        fill1: '#1F1F1F',
        fill2: '#2B2B2B',
        fill3: '#3A3A3A',
      },
    },
    oneDark: {
      colors: {
        canvas: '#282C34',
        text1: '#ABB2BF',
        text2: '#5C6370',
        border: '#3E4451',
        fill1: '#21252B',
        fill2: '#2C323D',
        fill3: '#3E4451',
      },
    },
  },
};

export default defineConfig({
  presets: [
    presetAttributify({ /* preset options */}),
    presetUno(),
    presetIcons({
      prefix: 'i-',
    }),
    presetTheme(themes),
  ],
  transformers: [
    transformerDirectives(),
  ],
  theme: {
    colors: {
      primary: '#7071F5',
      secondary: '#5C5CEA',
      canvas: '#FAFAFA',
      text1: '#333333',
      text2: '#818181',
      border: '#E0E0E0',
      error: '#FF6666',
      success: '#79C879',
      fill1: '#F7F7F7',
      fill2: '#F2F2F2',
      fill3: '#EDEDED',
    },
  },
  shortcuts: {
    'center': 'flex items-center justify-center',
    'hover': 'transition hover:bg-opacity-80',
    'row': 'flex flex-row',
    'col': 'flex flex-col',
    'centerRow': 'row items-center',
    'centerCol': 'col items-center',
    'container': 'max-w-1200px mx-auto max-md:max-w-90vw',
    'input': 'w-full h-8 px-2 border bg-fill2 border-border rounded focus:outline-none focus:ring-1 focus:ring-primary',
    'title': 'text-2xl text-text1 font-bold',
    'icon': 'inline-block',
    'btn-base': 'bg-transparent flex items-center hover:bg-fill3 rounded-lg px-2',
    'btn-primary': 'btn-base bg-primary text-white !hover:bg-secondary',
    'dialog': 'relative z-10',
    'dialog-panel': 'p-4 rounded-lg shadow-lg bg-fill1 transition-all',
    'dialog-title': 'text-xl text-text1 font-bold',
  },
});
