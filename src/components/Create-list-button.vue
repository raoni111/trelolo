<script lang="ts" setup>
import AddIcon from "@/components/icons/add-icon.svg";
import CloseIcon from "@/components/icons/close-icon.png";
import { useListStore } from "@/stores/list";
import { ref } from "vue";

const openModal = ref(false);
const listName = ref<string>('');

const store = useListStore();

const openForm = () => {
  openModal.value = !openModal.value;
}

const createList = (event: Event) => {
  event.preventDefault();

  if (listName.value.length === 0) {
    return;
  }
  store.addItemIntoList(listName.value.trim())

  listName.value = '';

  openModal.value = false;
}

</script>

<template>
  <form :class="openModal ?
    'flex flex-col justify-start w-[300px] bg-gray-950 p-3 text-white rounded-[10px]' :
    'hidden'"
    @submit="createList"
  >
    <input class="bg-gray-600 text-2xl p-3 rounded-[3px] outline-0 focus:border-2 border-blue-600" id="list-name" v-model="listName" type="text" placeholder="Digite o nome da lista" required>
    <div class="flex justify-start align-middle pt-4">
      <button class="bg-blue-600 p-2 text-[1.4rem] rounded-[3px] cursor-pointer">Adicionar lista</button>
      <button
        class="cursor-pointer hover:bg-gray-600 rounded-[3px]"
        style="margin-left: 5px"
        @click="openForm"
      >
        <img :src="CloseIcon" alt="">
      </button>
    </div>
  </form>
  <button
    :class="
      !openModal ? 'flex align-middle text-start text-[2rem] text-white bg-gray-500 hover:bg-gray-400 w-[300px] px-3 py-2 rounded-[10px] cursor-pointer scale-100 hover:scale-105 active:scale-100 ease-in-out duration-100'
      : 'hidden'"
    type="button"
    @click="openForm"
  >
    <img class="pr-3" :src="AddIcon" alt="icon plus">
    <span>
      Criar uma lista
    </span>
  </button>
</template>
