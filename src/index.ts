import { App, Plugin } from "vue";
import PluginHelloWorld from "./components/PluginHelloWorld.vue";
import { Stefan } from "./global-extensions";

import Plugin2HelloWorld from "./components/Plugin2HelloWorld.vue";
export { Plugin2HelloWorld };

export function createVuePlugin(options?: any): Plugin {
  return {
    install(app: App) {
      app.config.globalProperties.$stefan = <Stefan>{
        name: "Stefan"
      };
      app.component("plugin-hello-world", PluginHelloWorld);
    }
  }
}

export * from "./global-extensions";