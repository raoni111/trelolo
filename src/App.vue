<script setup lang="ts">
import HeaderComponent from "@/components/Header-component.vue";
import CreateListButton from "./components/Create-list-button.vue";

const openModal = () => {
  console.log("Teste");
}

</script>

<template>
  <HeaderComponent />
  <main class="relative p-5 overflow-hidden">
    <CreateListButton @on-click="openModal" />
  </main>
</template>

<style scoped>

</style>
