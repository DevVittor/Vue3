<script setup>
import { ref } from "vue";

const inputDate = ref("");
const formattedDate = ref("");

const onDateInput = (event) => {
  inputDate.value = event.target.value;
  formattedDate.value = formatToBrazilianDate(inputDate.value);
};
const formatToBrazilianDate = (dateString) => {
  if (!dateString) {
    return "";
  }

  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
};
</script>
<template>
  <div class="container-nascimento">
    <label for="date"> Data de nascimento: </label>
    <input v-model="inputDate" id="date" type="date" @input="onDateInput" />
    <p>Data Atual: {{ formattedDate }}</p>
  </div>
</template>
<style scoped>
.container-nascimento {
  display: flex;
  align-items: center;
  gap: 10px;
}
.select-nascimento {
  display: flex;
  align-items: center;
  gap: 5px;
}
.select-nascimento select {
  text-align: center;
  padding: 3px;
  border-radius: 3px;
  outline: none;
  border: 1px solid #ddd;
  background: white;
}
</style>
