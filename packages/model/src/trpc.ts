import { createTRPCVueQueryClient } from '@falcondev-oss/trpc-vue-query';
import type { AppRouter } from '@monorepo/backend';
import { VueQueryPlugin, useQueryClient } from '@tanstack/vue-query';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { App } from 'vue';

export const trpcNormal: ReturnType<typeof createTRPCProxyClient<AppRouter>> = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
});

export const VueTrpcPlugin = {
  install(app: App<Element>) {
    app.use(VueQueryPlugin);
    const queryClient = app.runWithContext(useQueryClient);
    const trpc = createTRPCVueQueryClient<AppRouter>({
      queryClient,
      trpc: {
        links: [
          httpBatchLink({
            url: 'http://localhost:3000/trpc',
          }),
        ],
      },
    });

    app.provide('trpc', trpc);
  },
};
