<script setup>
import TypeAccount from '../components/TypeAccount.vue';
import { ref, onMounted } from 'vue';

const gen = ref([]);
const years = ref([]);
const day = ref([]);
const month = ref([]);

const gens = () => {
  gen.value = ["Mulher", "Homem", "Trans"];
}

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
}
const daySelect = () => {
  for (let days = 1; days <= 31; days++) {
    day.value.push(days);
  }
}


onMounted(() => {
  fillYearSelect();
  monthSelect();
  daySelect();
  gens();
});
</script>
<template>
  <main>
    <section>
      <TypeAccount />
    </section>
    <section>
      <div class="container-form">
        <div class="box-form">
          <div class="form-name">
            <label for="">
              Nome:
            </label>
            <input type="text" name="" id="" placeholder="Digite seu nome">
          </div>
          <div class="form-lastname">
            <label for="">
              Sobrenome:
            </label>
            <input type="text" name="" id="" placeholder="Digite seu sobrenome">
          </div>
          <div class="form-email">
            <label for="">
              Email:
            </label>
            <input type="text" name="" id="" placeholder="Digite seu email">
          </div>
          <div class="form-gen flex flex-col gap-[5px]">
            <label for="">
              Gênero:
            </label>
            <select name="" id="">
              <option value="" selected disabled hidden>Escolha seu Gênero</option>
              <option v-for="listGen in gen" :value="gen">{{ listGen }}</option>
            </select>
          </div>
          <div class="form-nascimento">
            <label for="">
              Data de nascimento:
            </label>
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
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
.container-form {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 20px;
  gap: 10px;
  background: #ddd;
}

.box-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background: white;
}

.form-name {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-name input {
  border-bottom: 1px solid #ddd;
  outline: none;
}

.form-lastname {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-lastname input {
  border-bottom: 1px solid #ddd;
  outline: none;
}

.form-email {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-email input {
  border-bottom: 1px solid #ddd;
  outline: none;
}

.form-gen {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-gen select {
  padding: 3px 10px;
  font-weight: 400;
  font-size: 16px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 3px;
  outline: none;
}

.form-nascimento {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.inputs-nascimento {
  display: flex;
  align-items: center;
  gap: 8px;
}

.inputs-nascimento input {
  border-bottom: 1px solid #ddd;
  outline: none;
}
</style>