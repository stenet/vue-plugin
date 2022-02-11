import { ComponentCustomProperties } from "vue";

export interface Stefan {
  name: string;
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $stefan: Stefan;
  }
}
