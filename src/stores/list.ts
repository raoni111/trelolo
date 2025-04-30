import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ListType } from './interface/list-type';

export const useListStore = defineStore('counter', () => {
  const list = ref<ListType[]>([]);


  const addItemIntoList = (name: string) => {
    list.value.push({
      name,
      goals: []
    });
  }

  const removeItemIntoList = (index: number) => {
    list.value.splice(index, 1);
  }


  return { list, addItemIntoList, removeItemIntoList }
});
