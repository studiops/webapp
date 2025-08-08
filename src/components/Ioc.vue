<template>
  <div class="select-form">
    <label for="ioc-type">Quel IOC ? :</label>
    <select v-model="appStore.selectedIocType">
      <option disabled value="">-- Choisissez une option --</option>
      <option value="IP">IP</option>
      <option value="Hash">Hash</option>
      <option value="Mail">Mail</option>
      <option value="Domaine">Domaine</option>
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
  width: 250px;
}
</style>
