import {
  defineConfig,
  presetTypography,
  presetAttributify,
  presetUno,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno({}),
    presetAttributify(),
    presetIcons({
      prefix: 'i-',
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: 'inline-block',
      },
      collections: {
        twemoji: () =>
          import('@iconify-json/twemoji/index.js').then((i) => {
            return i.icons
          }),
      },
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
