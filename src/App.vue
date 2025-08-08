<template>
  <div id="app">
    <Logo />  
    <h1>Workflow N8N</h1>

    <Select></Select>
    
    <Client v-show="store.selectedWorkflow === 'IOC' || store.selectedWorkflow === 'Investigation'" />

    <Ioc v-show="store.selectedWorkflow === 'IOC' && store.selectedClient !== ''" />
    <IocData v-show="store.selectedWorkflow === 'IOC' && store.selectedClient !== '' && store.selectedIocType !== ''" />
    
    <Validation v-if="canValidate" />
  </div>
</template>

<script setup>
import Logo from './components/Logo.vue'
import Select from './components/Select.vue'
import Client from './components/Client.vue'
import Ioc from './components/Ioc.vue'
import IocData from './components/IocData.vue'
import Validation from './components/Validation.vue'

import { appStore as store } from '@/stores/store'
import { computed } from 'vue'

const canValidate = computed(() => {
  if (store.selectedWorkflow === 'Investigation') {
    return true
  }

  if (store.selectedWorkflow === 'IOC') {
    return (
      store.selectedClient !== '' &&
      store.selectedIocType !== '' &&
      store.iocData.trim() !== ''
    )
  }

  return false
})
</script>

<style scoped>

#app {
  max-width: 500px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0,.1);
}
</style>
