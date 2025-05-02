<script lang="ts" setup>
import IconPlus from "@/components/icons/add-icon.svg"
import CloseIcon from "@/components/icons/close-icon.png"
import { useListStore } from "@/stores/list";
import { ref } from "vue";

const displayForm = ref(true);
const cardName = ref<string>("");

const { index } = defineProps<{
  index: number;
}>()

const store = useListStore();

const addCard = (event: Event) => {
  event.preventDefault();
  store.addCardIntoList(index, cardName.value)

  displayForm.value = false;
  cardName.value = "";
}

</script>

<template>
  <div class="w-full">
    <form class="flex flex-col justify-start w-full bg-gray-950 p-3 text-white rounded-[10px]"
    @submit="addCard"
    v-if="!displayForm"
  >
    <input class="bg-gray-600 text-2xl p-3 rounded-[3px] outline-0 focus:border-2 border-blue-600"  :v-model="cardName" id="list-name" type="text" placeholder="Digite o nome do cartão" required>
    <div class="flex justify-start align-middle pt-4">
      <button class="bg-blue-600 p-2 text-[1.4rem] rounded-[3px] cursor-pointer">Adicionar cartão</button>
      <button
        class="cursor-pointer hover:bg-gray-600 rounded-[3px]"
        style="margin-left: 5px"
        @click="() => displayForm = true"
        type="button"
      >
        <img :src="CloseIcon" alt="">
      </button>
    </div>
  </form>
    <button
      v-if="displayForm"
      style="margin-top: 2rem;"
      class="flex text-white text-[1.5rem] text-start w-full hover:bg-gray-700 p-2 rounded-[5px] cursor-pointer"
      @click="() => displayForm = false"
      >
      <img style="margin-right: 1rem;" :src="IconPlus" alt="">
      <span>Adicionar cartão</span>
    </button>
  </div>
</template>
