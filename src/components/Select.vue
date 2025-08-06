<template>
  <div class="select-form">
    <label for="workflow-select">Choisissez le workflow à exécuter :</label>
    <select v-model="appStore.selectedWorkflow">
      <option disabled value="">-- Choisissez une option --</option>
      <option value="IOC">IOC</option>
      <option value="Investigation">Investigation</option>
    </select>
  </div>
</template>

<script setup>

import { appStore } from '@/stores/store'

</script>

<style scoped>
.select-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
}

</style>
