<script lang="ts" setup>
import type { ListType } from '@/stores/interface/list-type'
import MoreHoriz from '@/components/icons/more_horiz.svg'
import CloseIcon from '@/components/icons/close-icon.png'
import { ref } from 'vue'
import { useListStore } from '@/stores/list'
import CreateCardButton from './Create-card-button.vue'
import CardComponent from './Card-component.vue'
import VueDraggable from 'vuedraggable'

const displayModal = ref(false)
const store = useListStore()

const { item, indexList } = defineProps<{
  indexList: number
  item: ListType
}>()

const setDisplayModal = () => {
  displayModal.value = !displayModal.value
}

const deleteItem = () => {
  store.removeItemIntoList(indexList)
}

</script>

<template>
  <section class="bg-gray-950 w-[300px] h-min p-3 rounded-[10px]" style="margin-right: 10px">
    <div class="relative flex justify-between w-full">
      <input
        v-model="store.list[indexList].name"
        type="text"
        class="text-white outline-0 focus:border-blue-600 focus:border-2 rounded-[3px] px-3 text-[1.7rem]"
      />
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
            ? 'absolute z-10 top-0 right-[-90%] py-3 rounded-[5px] bg-gray-700 w-[300px] border-[1px] border-gray-500'
            : 'hidden'
        "
      >
        <div class="flex justify-center align-center relative p-1">
          <h1 class="text-[1.6rem] text-white" style="margin-bottom: 1rem">Ações da Lista</h1>
          <button
            class="absolute top-1 right-0 rounded-[3px] cursor-pointer hover:bg-gray-500"
            style="margin-right: 3px"
            @click="setDisplayModal"
          >
            <img class="size-8" :src="CloseIcon" alt="" />
          </button>
        </div>
        <ul class="flex flex-col">
          <li class="flex">
            <button
              class="w-full text-start text-[1.6rem] cursor-pointer px-7 text-gray-300 hover:bg-gray-600"
              @click="deleteItem"
            >
              Apagar Lista
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <VueDraggable
        v-model="store.list[indexList].cards"
        group="cards"
        item-key="id"
        :animation="200"
      >
        <template #item="{ element, index }">
          <CardComponent
            v-bind:key="element.id"
            :card="element"
            :index-list="indexList"
            :index-card="index"
          />
        </template>
      </VueDraggable>
      <CreateCardButton :index="indexList" />
    </div>
  </section>
</template>
