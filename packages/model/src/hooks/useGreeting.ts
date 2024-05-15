import { ref } from 'vue';
import { watchThrottled } from '@vueuse/core';
import { useTRPC } from './useTRPC';

export function useGreeting() {
  const name = ref('');
  const trpc = useTRPC();

  const {
    data: greeting,
    error,
    mutate,
    isPending: isLoading,
  } = trpc.hello.useMutation();

  watchThrottled(name, () => {
    mutate({ name: name.value });
  }, { throttle: 500 });

  return {
    name,
    greeting,
    error,
    isLoading,
  };
}
