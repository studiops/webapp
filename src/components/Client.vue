<template>
  <div class="select-form">
    <label for="client-name">Nom du client ? :</label>
    <select v-model="appStore.selectedClient">
      <option disabled value="">-- Choisissez une option --</option>
      <option value="Tous">Tous</option>
      <option value="Client 1">Client 1</option>
      <option value="Client 2">Client 2</option>
      <option value="Client 3">Client 3</option>
      <option value="Client 4">Client 4</option>
    </select>

  </div>
</template>

<script setup>

import { appStore } from '@/stores/store';


</script>

<style scoped>

.select-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
}
select {
  width: 250px
}
</style>
