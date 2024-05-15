<script setup lang="ts">
import { useGreeting } from '@monorepo/model';

const { name, greeting, isLoading, error } = useGreeting();
</script>

<template>
  <div class="flex w-80vw mx-a mt-40px h-auto sm:h-80vh flex-wrap">
    <!-- left -->
    <div class="h-full w-full md:w-1/2 lg:w-2/5">
      <h3 class="text-2xl font-bold">
        👋你好
      </h3>

      <input
        v-model="name"
        class="input mt-5"
        placeholder="请输入你的名字"
      >

      <p class="mt-5">
        <span v-if="isLoading">
          加载中...
        </span>
        <span v-else-if="error">
          加载失败 {{ error }}
        </span>
        <span v-else>
          {{ greeting }}
        </span>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
