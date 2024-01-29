import { ref } from "vue";
import { defineStore } from "pinia";

export const City = defineStore("citys", () => {
  let cityAll = ref([]),
  cityOne = ref({})
  return { cityAll, cityOne};
});
