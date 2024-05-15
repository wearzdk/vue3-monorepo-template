import { useLocalStorage } from '@vueuse/core';
import { computed, ref } from 'vue';
import { acceptHMRUpdate, defineStore } from 'pinia';
import { useTRPC } from '../hooks';

// 定义全局状态（使用pinia 这个store全局只会执行一次）
export const useUserStore = defineStore('user', () => {
  const savedName = ref('');
  const previousNames = ref(new Set<string>());
  // 持久化示例
  const token = useLocalStorage('token', '');
  const usedNames = computed(() => Array.from(previousNames.value));
  const otherNames = computed(() => usedNames.value.filter(name => name !== savedName.value));

  function setNewName(name: string) {
    if (savedName.value)
      previousNames.value.add(savedName.value);

    savedName.value = name;
  }

  return {
    token,
    setNewName,
    otherNames,
    savedName,
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
