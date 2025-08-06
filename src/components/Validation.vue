<template>
  <button type="button" @click="handleSubmit">OK</button>
</template>

<script setup>
import { appStore } from '@/stores/store'

const handleSubmit = async () => {
  const payload = {
    workflow: appStore.selectedWorkflow,
    client: appStore.selectedClient,
    iocType: appStore.selectedIocType,
    iocData: appStore.iocData
  }

  try {
    const response = await fetch('http://10.102.22.5:5678/webhook-test/select', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      throw new Error(`Erreur serveur : ${response.status}`)
    }

    // Si tout s'est bien passé, on réinitialise le store
    appStore.selectedWorkflow = ''
    appStore.selectedClient = ''
    appStore.selectedIocType = ''
    appStore.iocData = ''

  } catch (error) {
    console.error('Erreur lors de l’envoi :', error)
    alert('Une erreur est survenue lors de l’envoi des données.')
  }
}
</script>

<style scoped>
button {
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
}
</style>
