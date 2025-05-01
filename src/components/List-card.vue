<script lang="ts" setup>
import type { ListType } from '@/stores/interface/list-type'
import MoreHoriz from '@/components/icons/more_horiz.svg'
import CloseIcon from '@/components/icons/close-icon.png'
import { ref } from 'vue'
import { useListStore } from '@/stores/list'

const displayModal = ref(false)
const store = useListStore();

const { item, index } = defineProps<{
  index: number
  item: ListType
}>()

const setDisplayModal = () => {
  displayModal.value = !displayModal.value
}

const deleteItem = () => {
  store.removeItemIntoList(index)
}

</script>

<template>
  <section class="bg-gray-950 w-[300px] h-min p-3 rounded-[10px]" style="margin-right: 10px">
    <div class="relative flex justify-between w-full">
      <h1 class="text-white text-3xl">{{ item.name }}</h1>
      <button
        type="button"
        class="relative rounded-full hover:bg-gray-500 ease-in-out duration-100 cursor-pointer"
        @click="setDisplayModal"
      >
        <img :src="MoreHoriz" alt="" />
      </button>
      <div
        :class="
          displayModal
            ? 'absolute z-10 top-0 right-[-50%] py-3 rounded-[5px] bg-gray-700 w-[170px]'
            : 'hidden'
        "
      >
        <div class="flex justify-center align-center relative p-1">
          <h1 class="text-[1.5rem] text-white" style="margin-bottom: 1rem">Ações da Lista</h1>
          <button
            class="absolute top-1 right-0 rounded-[3px] cursor-pointer hover:bg-gray-500"
            style="margin-right: 3px"
            @click="setDisplayModal"
          >
            <img class="size-8" :src="CloseIcon" alt="" />
          </button>
        </div>
        <ul class="flex flex-col">
          <li class="flex w-full">
            <button
              class="w-full text-start text-[1.5rem] cursor-pointer px-3 text-gray-300 hover:bg-gray-600"
            >
              Aditar Lista
            </button>
          </li>
          <li class="flex">
            <button
              class="w-full text-start text-[1.5rem] cursor-pointer px-3 text-gray-300 hover:bg-gray-600"
              @click="deleteItem"
            >
              Apagar Lista
            </button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
