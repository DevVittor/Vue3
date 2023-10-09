<script setup></script>
<template>
  <div class="container-name">
    <div class="form-name-lastname">
      <label for=""> Nome: </label>
      <input type="text" name="" id="" placeholder="Digite seu nome" />
    </div>
    <div class="form-name-lastname">
      <label for=""> Sobrenome: </label>
      <input type="text" name="" id="" placeholder="Digite seu sobrenome" />
    </div>
  </div>
</template>
<style scoped>
.container-name {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  width: 100%;
}

.form-name-lastname {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-name-lastname input {
  border: 1px solid #ddd;
  border-radius: 3px;
  outline: none;
  padding: 3px 10px;
}
</style>
