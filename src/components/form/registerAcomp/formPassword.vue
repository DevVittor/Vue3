<script setup>
import { ref } from "vue";

const mudarType1 = ref(false);
const mudarType2 = ref(false);

function handleIcon1() {
  mudarType1.value = !mudarType1.value;
}
function handleIcon2() {
  mudarType2.value = !mudarType2.value;
}
</script>
<template>
  <div class="container-password">
    <div class="form-password">
      <label for=""> Password: </label>
      <div class="row-password">
        <input :type="mudarType1 ? 'text' : 'password'" name="" id="mudarType1" placeholder="******" />
        <i @click="handleIcon1" class="fa-solid fa-eye-slash"></i>
      </div>
    </div>
    <div class="form-confirm-email">
      <label for=""> Confirm Password: </label>
      <div class="row-password">
        <input :type="mudarType2 ? 'text' : 'password'" name="" id="mudarType2" placeholder="******" />
        <i @click="handleIcon2" class="fa-solid fa-eye-slash"></i>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container-password {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-password {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.row-password input {
  border: none;
  outline: none;
}

.form-confirm-email {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.row-password {
  border: 1px solid #ddd;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 5px;
  padding-right: 10px;
  border-radius: 3px;
}

.row-password i {
  cursor: pointer;
}
</style>
