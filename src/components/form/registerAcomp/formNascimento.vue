<script setup>
import { ref, onMounted } from "vue";
const years = ref([]);
const day = ref([]);
const month = ref([]);
const fillYearSelect = () => {
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= currentYear - 100; year--) {
    years.value.push(year);
  }
};

const monthSelect = () => {
  for (let months = 1; months <= 12; months++) {
    month.value.push(months);
  }
};

const daySelect = () => {
  for (let days = 1; days <= 31; days++) {
    day.value.push(days);
  }
};

onMounted(() => {
  fillYearSelect();
  monthSelect();
  daySelect();
});
</script>
<template>
  <div class="form-nascimento">
    <label for=""> Data de nascimento: </label>
    <div class="inputs-nascimento">
      <select name="" id="">
        <option v-for="days in day" :value="day">{{ days }}</option>
      </select>
      <span>/</span>
      <select name="" id="">
        <option v-for="months in month" :value="month">{{ months }}</option>
      </select>
      <span>/</span>
      <select name="" id="">
        <option v-for="year in years" :value="year">{{ year }}</option>
      </select>
    </div>
  </div>
</template>
<style scoped></style>
