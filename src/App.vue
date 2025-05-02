<script setup lang="ts">
import HeaderComponent from '@/components/Header-component.vue'
import CreateListButton from './components/Create-list-button.vue'
import { useListStore } from './stores/list'
import ListCard from './components/List-card.vue'
import Vuedraggable from 'vuedraggable'

const listStore = useListStore()

const dragEnd = (event: Event) => {
  listStore.updateOrderList(event.oldIndex, event.newIndex);
}

</script>

<template>
  <HeaderComponent />
  <main class="flex relative p-5 h-full">
    <Vuedraggable
      v-model="listStore.list"
      class="flex"
      :animation="200"
      item-key="id"
      @end="dragEnd"
    >
      <template #item="{ element, index }">
        <ListCard
          v-bind:key="element.id"
          :item="element"
          :index="index"
        />
      </template>
    </Vuedraggable>
    <CreateListButton />
  </main>
</template>

<style scoped></style>
