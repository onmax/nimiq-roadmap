import { presetNimiq } from 'nimiq-css'
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'
import { presetRemToPx } from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetUno({ attributifyPseudo: true }),
    presetNimiq({
      utilities: true,
    }),
    presetRemToPx({ baseFontSize: 4 }),
    presetAttributify(),
    presetIcons(),
    presetIcons({
      collections: {
        custom: {
          js: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="#fff" fill-rule="evenodd" d="M13.795 16.589c-1.57 0-2.585-.749-3.08-1.728l1.377-.798c.362.593.833 1.027 1.667 1.027.7 0 1.148-.35 1.148-.833 0-.727-.97-1.012-1.655-1.305-1.22-.52-2.03-1.172-2.03-2.55 0-1.268.966-2.234 2.477-2.234 1.075 0 1.848.374 2.404 1.352l-1.317.846c-.29-.519-.604-.724-1.087-.724-.496 0-.81.314-.81.724 0 .508.314.713 1.04 1.027 1.52.652 2.67 1.164 2.67 2.84 0 1.522-1.196 2.356-2.804 2.356ZM9.9 14.039c0 1.752-1.08 2.679-2.578 2.679-1.353 0-2.164-.518-2.563-1.418h-.023l1.376-.962c.265.47.505.805 1.084.805.557 0 .904-.282.904-1.127V8.1h1.8v5.94ZM0 18h18V0H0v18Z" clip-rule="evenodd"/></svg>',
        },
      },
    }),
  ],
})
