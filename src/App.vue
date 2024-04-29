<script setup lang="ts">
import { createReusableTemplate, useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const firstYear = 2017
const firstMonth = 1

interface Block {
  icon?: string
  name: string
  year: number
  month: number
  withBg?: boolean
  row?: number
}

interface Layer {
  name: string
  bg: string
  text: string
  icon: string
  blocksBg: string
  blocksText: string
  blocks: {
    name: string
    items: Block[] | Block[][]
  }[]
}

const layers: Layer[] = [
  {
    name: 'Network Layer',
    bg: 'bg-blue/10',
    text: 'text-blue-1100',
    icon: 'i-nimiq:icons-lg-network',
    blocksBg: 'bg-blue',
    blocksText: 'text-neutral-0',
    blocks: [
      {
        name: 'Research',
        items: [
          {
            icon: 'i-custom:js',
            name: 'First Blockchain in JS',
            year: firstYear,
            month: firstMonth
          },
          {
            icon: 'i-nimiq:mining',
            name: 'Browser mining',
            year: 2018,
            month: 8,
          },
          {
            icon: 'i-nimiq:leaf-2',
            name: 'Albatross PoS design',
            year: 2019,
            month: 7,
          },
          {
            icon: 'i-nimiq:divergence',
            name: 'Fiat-crypto HTLCs ',
            year: 2020,
            month: 11,
          },
          {
            icon: 'i-nimiq:eyeslash',
            name: 'ZKP system',
            year: 2022,
            month: 1
          },
          {
            icon: 'i-nimiq:locked-lock',
            name: 'Passkeys',
            year: 2024,
            month: 2
          }
        ],
      },
      {
        name: 'Blockchain',
        items: [
          {
            icon: 'i-nimiq:pacifier',
            name: 'First prototype',
            withBg: true,
            year: 2017,
            month: 4,
          },
          {
            icon: 'i-nimiq:tools',
            name: 'Development PoW',
            year: 2018,
            month: 2,
          },
          {
            icon: 'i-nimiq:moon',
            name: 'Luna Testnet',
            year: 2018,
            month: 4,
            row: 2,
          },
          {
            name: '<b>1.0</b> Nimiq PoW',
            year: 2019,
            month: 2,
          },
          {
            icon: 'i-nimiq:mining',
            name: 'Browser mining',
            year: 2019,
            month: 9,
          },
          {
            icon: 'i-custom:rust',
            name: 'Rust implementation',
            year: 2019,
            month: 11,
            row: 2
          },
          {
            icon: 'i-nimiq:tools',
            name: 'Development PoS',
            year: 2020,
            month: 8
          },
          {
            icon: 'i-custom:wasm',
            name: 'WASM support',
            year: 2021,
            month: 7
          },
          {
            icon: 'i-nimiq:handshake',
            name: 'Sync protocol redesign',
            year: 2022,
            month: 2,
            row: 2
          },
          {
            icon: 'i-nimiq:leaf-2',
            name: 'PoS Testnet',
            year: 2022,
            month: 6
          },
          {
            name: '<b>2.0</b> Nimiq PoS',
            year: 2024,
            month: 7,
            withBg: true
          }
        ],
      },
      {
        name: 'Swap Technology',
        items: [
          {
            icon: 'i-nimiq:logos-nimiq-mono',
            name: 'OASIS',
            year: 2021,
            month: 1,
          },
        ],
      },
    ],
  },

  {
    name: 'App Layer',
    bg: 'bg-gold/10',
    text: 'text-gold-1100',
    icon: 'i-nimiq:icons-lg-network',
    blocksBg: 'bg-gold',
    blocksText: 'text-neutral-0',
    blocks: [
      {
        name: 'Wallet',
        items: [
          {
            icon: 'i-nimiq:logos-nimiq-mono',
            name: 'Nimiq Wallet 1.0',
            year: 2019,
            month: 1,
          },
          {
            icon: 'i-nimiq:logos-nimiq-mono',
            name: 'Nimiq Wallet 2.0',
            year: 2020,
            month: 1,
          },
          {
            icon: 'i-nimiq:ledger-2',
            name: 'Ledger integration',
            year: 2020,
            month: 9,
            row: 3
          },
          {
            icon: 'i-nimiq:logos-btc-mono',
            name: 'BTC Integration',
            year: 2021,
            month: 4,
          },
          {
            icon: 'i-nimiq:logos-usdc-mono',
            name: 'USDC Integration',
            year: 2021,
            month: 4,
            row: 2,
          },
          {
            icon: 'i-nimiq:icons-lg-btc-nim-swap',
            name: 'Crypto swaps',
            year: 2022,
            month: 6
          },
          {
            icon: 'i-nimiq:icons-lg-usdc-nim-swap',
            name: 'Crypto/fiat swaps',
            year: 2022,
            month: 12,
            row: 2
          },
          {
            icon: 'i-nimiq:leaf-3',
            name: 'Pre-Staking',
            year: 2024,
            month: 5
          }
        ],
      },
      {
        name: 'Merchants App',
        items: [
          [
            {
              icon: 'i-nimiq:logos-nimiq-horizontal-mono w-68 h-16',
              name: 'Checkout',
              year: 2020,
              month: 1
            }
          ],
          [
            {
              icon: 'i-nimiq:logos-nimiq-horizontal-mono w-68 h-16',
              name: 'Checkout',
              year: 2021,
              month: 1
            },
            {
              icon: 'i-nimiq:logos-cpl=tag-mono',
              name: 'Checkout',
              year: 2022,
              month: 1
            }
          ]
        ]
      },
      {
        name: 'Exchange Service',
        items: [
          [
            {
              icon: 'i-nimiq:logos-sss',
              name: 'SuperSimpleSwap',
              year: 2020,
              month: 11,
            },
          ],
          [
            {
              name: 'Paused for regulatory reasons',
              year: 2024,
              month: 5,
            },
          ]
        ],
      },
      {
        name: 'Payment App',
        items: [
          {
            icon: 'i-nimiq:logos-nimiq-mono',
            name: 'Pay',
            year: 2024,
            month: 5,
          },
        ],
      },
    ],
  },
]

function getStartOfBlock(block: Block[] | Block[][]) {
  if (Array.isArray(block)) {
    // @ts-ignore
    return getStartOfBlock((block as Block[])[0])
  }
  console.log({ block })
  // @ts-ignore
  return { '--first-month': block.month, '--first-year': block.year }
}

const [DefineTemplate, ReuseTemplate] = createReusableTemplate<Block>()
</script>

<template>
  <header flex="~ gap-32 col lg:row items-center justify between" max-h-screen px-32 py-40 mx-auto w-full
    bg-neutral-100>
    <div i-nimiq:logos-nimiq-vertical dark:i-nimiq:logos-nimiq-white-vertical text-64 />

    <div flex="~ gap-32 wrap items-center flex-1 justify-center" w-full>
      <h1 font-bold text-32>
        Nimiq Roadmap
      </h1>
      <button pill-blue pill-sm @click="() => toggleDark()">
        Change theme
      </button>
    </div>
    <div w-64 />
  </header>



  <main bg-neutral-100 of-x-auto min-h-screen>
    <ul flex="~ col gap-16" ml-96 w-max>
      <li v-for="layer in layers" :key="layer.name" :class="layer.bg" p-24 pr-0 flex="~ col justify-end" relative
        rounded-6 w-max self-end>
        <div v-for="block in layer.blocks" :key="block.name" mt-24 first:mt-0 flex="~ justify-end">
          <div relative pt-12>
            <span label text-10 grid-row-span-full block absolute left-0 top-0 :class="layer.text">
              {{ block.name }}
            </span>
            <DefineTemplate v-slot="{ name, month, year, icon, withBg, row }">
              <div flex="~ gap-8 items-center" w-max
                :class="{ 'px-8 py-4 rounded-6 bg-[hsla(0,0%,100%,0.25)]': withBg }"
                :style="{ '--year': year, '--month': month, 'grid-row': row || 1 }">
                <div v-if="icon" :class="icon" shrink-0 text="14" op-90 />
                <span whitespace-nowrap text-16 :class="{ 'lh-none': !withBg }" v-html="name" />
              </div>
            </DefineTemplate>

            <template v-if="Array.isArray(block.items[0])">
              <div flex="~ gap-8">
                <div v-for="(subblock, index) in block.items as Block[][]" :key="index"
                  :style="getStartOfBlock(subblock)" :class="[layer.blocksBg, layer.blocksText]" rounded-6 last:rounded-r-0 p-16 class="layer">
                  <ReuseTemplate v-for="item in subblock" :key="item.name" v-bind="item" />
                </div>
              </div>
            </template>
            <template v-else>
              <div rounded-l-6 p-16 class="layer" :style="getStartOfBlock(block.items)"
                :class="[layer.blocksBg, layer.blocksText]">
                <ReuseTemplate v-for="item in block.items as Block[]" :key="item.name" v-bind="item" />
              </div>
            </template>
          </div>
        </div>
      </li>
    </ul>
  </main>
</template>

<style>
:root {
  --current-year: 2024;
  --current-month: 5;

  /* We leave a gap of one year to "see" in the future */
  --last-displayed-year: calc(var(--current-year) + 1);

  --columns-width: 19px;
}

.layer {
  --columns: calc((var(--last-displayed-year) - var(--first-year)) * 12 + (var(--current-month) - var(--first-month) + 1));
  display: grid;
  grid-template-columns: repeat(var(--columns), var(--columns-width));
  row-gap: 12px;

  >div {
    --column-start: calc((var(--year) - var(--first-year)) * 12 + var(--month) - var(--first-month) + 1);
    grid-column: var(--column-start) / span 1;
  }
}
</style>
