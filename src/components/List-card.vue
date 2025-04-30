<script lang="ts" setup>
import type { ListType } from '@/stores/interface/list-type'

const { item } = defineProps<{
  item: ListType
}>()
</script>

<template>
  <section class="bg-gray-950 w-[300px] p-3 rounded-[10px]" style="margin-right: 10px;">
    <div class="w-full">
      <h1 class="text-white text-3xl">{{ item.name }}</h1>
    </div>
  </section>
</template>
