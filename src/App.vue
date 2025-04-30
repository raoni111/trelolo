<script setup lang="ts">
import HeaderComponent from "@/components/Header-component.vue";
import CreateListButton from "./components/Create-list-button.vue";
import { useListStore } from "./stores/list";
import ListCard from "./components/List-card.vue";

const listStore = useListStore();

</script>

<template>
  <HeaderComponent />
  <main class="flex relative p-5 overflow-hidden">
    <ListCard
      v-for="item in listStore.list"
      v-bind:key="item.id"
      :item="item"
    />
    <CreateListButton />
  </main>
</template>

<style scoped>

</style>
