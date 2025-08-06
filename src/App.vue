<template>
  <div id="app">
    <Logo />  
    <h1>Workflow N8N</h1>

    <Select></Select>
    
    <Client v-if="store.selectedWorkflow === 'IOC' || store.selectedWorkflow === 'Investigation'" />

    <Ioc v-if="store.selectedWorkflow === 'IOC' && store.selectedClient !== ''" />
    <IocData v-if="store.selectedWorkflow === 'IOC' && store.selectedClient !== '' && store.selectedIocType !== ''" />
    
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
