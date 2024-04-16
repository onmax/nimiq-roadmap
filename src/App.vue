<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const timelines = [
  {
    name: 'Network Layer',
    bg: 'bg-blue/10',
    text: 'text-[#04639A]',
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
            year: 2017,
            quarter: 1,
          },
          {
            icon: 'i-nimiq:mining',
            name: 'Browser mining',
            year: 2018,
            quarter: 3,
          },
          {
            icon: 'i-nimiq:leaf-2',
            name: 'Albatross PoS design',
            year: 2019,
            quarter: 3,
          },
          {
            icon: '',
            name: 'Fiat-crypto HTLCs ',
            year: 2020,
            quarter: 4,
          },
        ],
      },
      {
        name: 'Blockchain',
        items: [
          {
            icon: 'i-custom:js',
            name: 'First prototype',
            year: 2017,
            quarter: 2,
          },
          {
            icon: '',
            name: 'Development PoW',
            year: 2018,
            quarter: 1,
          },
        ],
      },
      {
        name: 'Swap Technology',
        items: [
          {
            icon: 'i-nimiq:logos-nimiq-mono',
            name: 'OASIS',
            year: 2021,
            quarter: 1,
          },
        ],
      },
    ],
  },
]
</script>

<template>
  <header flex="~ gap-32 col lg:row items-center justify between" max-h-screen px-32 py-40 mx-auto w-full bg-neutral-100>
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

  <main bg-neutral-100 h-full>
    <ul>
      <li v-for="timeline in timelines" :key="timeline.name" :class="timeline.bg" relative col-start-2 col-end--1 class="grid-timelines" of-auto p-24 pr-0>
        <div
          v-for="(block, i) in timeline.blocks" :key="block.name" flex="~ col gap-2" mt-16 :style="{
            '--quarter': block.items[0].quarter, '--year': block.items[0].year,
          }"
        >
          <span label text-blue text-10>{{ block.name }}</span>
          <div rounded-l-6 p-16 :class="`${timeline.blocksBg} ${timeline.blocksText}`" flex="~ gap-12 items-center" :style="{ '--quarter': block.items[0].quarter, '--year': block.items[0].year }" class="block-grid">
            <div v-for="item in block.items" :key="item.name" :style="{ '--quarter': item.quarter, '--year': item.year }" flex="~ gap-8 items-center" text-14>
              <div :class="item.icon" text="12 op-80" />
              {{ item.name }}
            </div>
          </div>
        </div>
        <!-- <h3 text-18 flex="~ gap-12 items-center" :class="timeline.text" absolute bottom-24 left-24>
          <div :class="timeline.icon" />
          {{ timeline.name }}
        </h3> -->
        <!-- <div v-for="(block, i) in timeline.blocks" :key="block.name" flex="~ col gap-2" mt-16 :style="{ '--quarter': block.items[0].quarter, '--year': block.items[0].year }">
          <span label text-blue text-10>{{ block.name }}</span>
          <div rounded-l-6 p-16 :class="`${timeline.blocksBg} ${timeline.blocksText}`" flex="~ gap-12 items-center" class="research-grid">
            <div v-for="item in block.items" :key="item.name" :style="{ '--quarter': item.quarter, '--year': item.year }" flex="~ gap-8 items-center" text-14>
              <div :class="item.icon" text="12 op-80" />
              {{ item.name }}
            </div>
          </div>
        </div> -->
      </li>
    </ul>
  </main>
</template>

<style>
:root {
  --first-year: 2017;
  --current-year: 2024;
  --year-columns: calc(var(--current-year) - var(--first-year) + 1);
  --year-columns-width: 221px;
  --quarter-columns: 4;
  --quarter-columns-width: calc(
    var(--year-columns-width) / var(--quarter-columns)
  );
}

.grid-timelines {
  --cols: calc(var(--year-columns) * var(--quarter-columns));
  display: grid;
  grid-template-columns: 164px repeat(var(--cols), var(--quarter-columns-width));
  gap: 16px;

  > * {
    --column-start: calc(
      (var(--year) - var(--first-year)) * var(--quarter-columns) +
        var(--quarter)
    );
    grid-column: calc(var(--column-start)) / -1;
    white-space: nowrap;
  }
}

.block-grid {
  --year-columns: calc(var(--current-year) - var(--year) + 1);
  --cols: calc(var(--year-columns) * var(--quarter-columns));
  display: grid;
  grid-template-columns: 164px repeat(var(--cols), var(--quarter-columns-width));
  gap: 16px;

  > * {
    --column-start: calc(
      (var(--year) - var(--first-year)) * var(--quarter-columns) +
        var(--quarter)
    );
    grid-column: calc(var(--column-start));
    white-space: nowrap;
  }
}

/* .grid-timelines {
  display: grid;
  --year: 2017;
  --research-columns: calc(var(--current-year) - var(--year) + 1) * 4;
  grid-template-columns: 171px repeat(
      var(--research-columns),
      var(--quarter-columns-width)
    );

  > * {
    --column-start: calc(
      (var(--year) - var(--first-year)) * 4 + var(--quarter)
    );
    grid-column: calc(-1 * var(--column-start)) / -1;
    white-space: nowrap;
  }
}

.subgrid {
  display: grid;
  grid-template-rows: subgrid;
}

.research-grid {
  --start: 2017;
  --quarter: 1;
  --research-columns: calc(var(--current-year) - var(--start) + 1) * 4;
  display: grid;
  grid-template-columns: repeat(
    var(--research-columns),
    var(--quarter-columns-width)
  );

  > * {
    --column-start: calc((var(--year) - var(--start)) * 4 + var(--quarter));
    grid-column-start: var(--column-start);
    white-space: nowrap;
  }
} */
</style>
