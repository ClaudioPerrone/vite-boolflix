import { reactive } from "vue";

export const store = reactive({
   movies: [],
   series: [],
   searchText: '',
   apiKey: 'db2ebbac3bf124478e2ac4658e9dae84'
});