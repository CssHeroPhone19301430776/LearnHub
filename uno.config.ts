// uno.config.ts
import presetWind from '@unocss/preset-wind'
import presetIcons from '@unocss/preset-icons'
// import { presetIcons, presetWind } from 'unocss'
import { defineConfig } from 'unocss'

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
  ]
})
