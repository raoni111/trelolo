<script lang="ts" setup>
import type { CardType } from '@/stores/interface/list-type'
import { useListStore } from '@/stores/list'
import CardInformation from '@/components/Card-information.vue'
import { ref } from 'vue'

const displayInformation = ref(false)

const state = useListStore()

const { card, indexList, indexCard } = defineProps<{
  card: CardType
  indexCard: number
  indexList: number
}>()
</script>

<template>
  <li
    style="margin-top: 2rem"
    class="flex group bg-gray-800 hover:bg-gray-700 hover:border-[1px] hover:border-gray-200 w-full h-min p-4 rounded-[5px] text-white text-[1.5rem] cursor-pointer"
    @click="() => (displayInformation = !displayInformation)"
  >
    <Teleport to="body">
      <CardInformation
        :card="card"
        :cardIndex="indexCard"
        :listIndex="indexList"
        :display="displayInformation"
        @close-button="() => (displayInformation = !displayInformation)"
        v-if="displayInformation"
      />
    </Teleport>
    <div
      :class="
        card.completed
          ? 'opacity-100 w-[20px]'
          : 'opacity-0 w-[0px] group-hover:opacity-100 group-hover:w-[20px] ease-in-out duration-200'
      "
    >
      <input
        class="cursor-pointer rounded-[10px] accent-green-500"
        v-model="state.list[indexList].cards[indexCard].completed"
        type="checkbox"
        name="Card completed"
        id="card-completed"
      />
    </div>
    <span class="text-[1.4rem] w-[230px]">
      {{ card.text }}
    </span>
  </li>
</template>
