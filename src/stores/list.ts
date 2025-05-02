import {  reactive, watch,  } from 'vue'
import { defineStore } from 'pinia'
import type { ListType } from './interface/list-type';

export const useListStore = defineStore('counter', () => {
  const listJson: ListType[] = JSON.parse(localStorage.getItem('list') ?? '[]');

  const list = reactive<ListType[]>(!listJson ? [] : listJson);

  const addItemIntoList = (name: string) => {
    list.push({
      id: Date.now(),
      name,
      cards: []
    });
  }

  const removeItemIntoList = (index: number) => {
    list.splice(index, 1);
  }

  const addCardIntoList = (index: number, goal: string) => {
    list[index].cards.push({
      id: Date.now(),
      name: goal,
      completed: false
    });
  }

  const removeCardIntoList = (index: number, goalIndex: number) => {
    list[index].cards.splice(goalIndex, 1);
  }

  watch(list, () => {
    const listString = JSON.stringify(list);

    localStorage.setItem("list", listString);
  });

  return { list, addItemIntoList, removeItemIntoList, addCardIntoList, removeCardIntoList }
});
