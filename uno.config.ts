// uno.config.ts
import presetWind from '@unocss/preset-wind'
import presetIcons from '@unocss/preset-icons'
import { defineConfig, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    })
  ],
  transformers: [transformerDirectives()],
  shortcuts: {
    'bg-image': 'w-full h-full bg-cover bg-center-top bg-no-repeat'
  }
})
