<script lang="ts" setup>
import type { CardType } from '@/stores/interface/list-type'
import { useListStore } from '@/stores/list'
import CloseIcon from "@/components/icons/close-icon.png"
import DescriptionIcon from "@/components/icons/description-icon.svg";
import TrashIcon from './icons/Trash-icon.vue';
import TagIcon from './icons/Tag-Icon.vue';

const { card, listIndex, cardIndex } = defineProps<{
  card: CardType
  listIndex: number
  cardIndex: number
}>();

const store = useListStore();
const emit = defineEmits(['displayCard', 'closeButton'])

const removeCard = () => {
  store.removeCardIntoList(listIndex, cardIndex);

  emit('displayCard');
}

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
          @click="emit('closeButton')"
          style="margin-left: 1rem;"
        >
          <img class="w-13" :src="CloseIcon" alt="">
        </button>
      </header>
      <div>
        <div class="flex">
          <div class="w-full">
            <div class="pt-10">
              <h1 class="flex text-[1.8rem] text-white">
                <img :src="DescriptionIcon" alt="">
                <span class="pl-3">Descrição</span>
              </h1>
            </div>
            <textarea
            class="w-full resize-none text-white text-[1.5rem] p-4 outline-0 focus:border-[2px] focus:bg-gray-900 focus:border-blue-500 rounded-[10px] h-[300px]"
            style="margin-top: 2rem;"
            name="description-card"
            id="description-card"
            v-model="store.list[listIndex].cards[cardIndex].description"
            placeholder="Escreva uma descrição para o seu card"
          >
          </textarea>
          </div>
          <div class="w-[25%] p-3">
            <h3 class="py-4 text-[1.2rem] text-gray-400">Ações</h3>
            <ul class="flex flex-col gap-5">
              <li>
                <button class="flex justify-start items-center group bg-gray-600 w-full p-2 px-5 text-[1.2rem] text-start font-bold text-gray-300 rounded-[5px] hover:bg-gray-300 hover:text-gray-500 duration-200 ease-in-out cursor-pointer">
                  <TagIcon class="w-[12px] h-[12px] text-gray-300 group-hover:text-gray-500 duration-200 ease-in-out" style="margin-right: 0.5rem;"/>
                  Etiquetas
                </button>
              </li>
              <li>
                <button
                  class="group flex justify-start items-center bg-gray-600 text-start p-2 px-5 w-full text-[1.2rem] font-bold text-gray-300 rounded-[5px] hover:bg-red-500 hover:text-white cursor-pointer duration-200 ease-in-out"
                  @click="removeCard"
                >
                  <TrashIcon class="w-[12px] h-[12px] text-gray-300 group-hover:text-white duration-200 ease-in-out" style="margin-right: 0.5rem;" />
                  Apagar
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="z-30 absolute w-full h-full bg-gray-900 opacity-70"></div>
  </section>
</template>
