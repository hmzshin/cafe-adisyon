import { defineStore } from "pinia";

import { Store } from "../interfaces/Store";

export const store = defineStore("adisyon", {
  state: (): Store => ({
    count: 50,
  }),

  actions: {
    increment() {
      this.count++;
    },
  },

  getters: {
    doubleCount: (state: Store): number => state.count * 2,
  },
});
