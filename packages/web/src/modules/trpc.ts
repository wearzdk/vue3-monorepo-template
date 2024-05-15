import { VueTrpcPlugin } from '@monorepo/model';
import type { UserModule } from '../types';

// Setup Pinia
// https://pinia.esm.dev/
export const install: UserModule = ({ app }) => {
  app.use(VueTrpcPlugin);
};
