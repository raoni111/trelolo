<script lang="ts" setup>
import type { CardType } from '@/stores/interface/list-type'
import { useListStore } from '@/stores/list'
import CloseIcon from "@/components/icons/close-icon.png"
import type { Ref } from 'vue';

const { card, listIndex, cardIndex } = defineProps<{
  card: CardType
  listIndex: number
  cardIndex: number
}>()

const store = useListStore()
</script>

<template>
  <section class="z-30 flex justify-center items-start fixed top-0 left-0 w-full h-dvh">
    <div
      class="z-40 w-[800px] h-[500px] p-10 bg-gray-800 rounded-[20px]"
      style="margin-top: 5rem;"
    >
      <header class="flex justify-between items-center">
        <div class="flex w-full">
          <input
            class="w-8 cursor-pointer accent-green-500"
            style="margin-right: 2rem;"
            type="checkbox"
            v-model="store.list[listIndex].cards[cardIndex].completed"
          />
          <input
            class="w-full rounded-[5px] p-1 px-3 text-white text-[2rem] outline-0 focus:border-[1px] focus:bg-gray-900 border-blue-600"
            type="text"
            v-model="store.list[listIndex].cards[cardIndex].text"
          >
        </div>
        <button
          class="cursor-pointer hover:bg-gray-900 rounded-full p-2"
          @click="$emit('closeButton')"
          style="margin-left: 1rem;"
        >
          <img class="w-13" :src="CloseIcon" alt="">
        </button>
      </header>
    </div>
    <div class="z-30 absolute w-full h-full bg-gray-900 opacity-70"></div>
  </section>
</template>
