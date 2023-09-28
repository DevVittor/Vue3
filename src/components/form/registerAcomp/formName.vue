<script setup></script>
<template>
  <div class="form-name">
    <label for=""> Nome: </label>
    <input type="text" name="" id="" placeholder="Digite seu nome" />
  </div>
  <div class="form-lastname">
    <label for=""> Sobrenome: </label>
    <input type="text" name="" id="" placeholder="Digite seu sobrenome" />
  </div>
</template>
<style scoped>
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
</style>
