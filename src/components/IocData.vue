<template>
  <div class="ioc-data">
    <label for="ioc-data-input">Entrez les données IOC :</label>
    <textarea
      id="ioc-data-input"
      v-model="appStore.iocData"
      placeholder="Saisissez ici les données IOC (une par ligne)"
      rows="5"
    ></textarea>
  </div>
</template>

<script setup>
import { appStore } from '@/stores/store'
</script>

<style scoped>
.ioc-data {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-top: 10px;
  width: 250px;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

textarea {
  padding: 8px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertival;
}
</style>
