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
    <input
      v-model="inputDate"
      id="date"
      type="date"
      @input="onDateInput"
      pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
      min="1923-01-01"
      max="2023-01-01"
    />
  </div>
</template>
<style scoped>
.container-nascimento {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.container-nascimento input {
  padding: 3px 5px;
  border: 1px solid #ddd;
  border-radius: 3px;
  outline: none;
  background: white;
}
</style>
