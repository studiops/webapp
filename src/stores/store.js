// store.js
import { reactive } from 'vue'

export const appStore = reactive({
  selectedWorkflow: '',
  selectedClient: '',
  selectedIocType: '',
  selectedIocTypeName: '',
  iocData: '',

})
